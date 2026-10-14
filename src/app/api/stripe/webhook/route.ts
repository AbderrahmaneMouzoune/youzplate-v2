import { Resend } from 'resend'

import { env } from '@/env'
import { buildOrderNotification } from '@/lib/order-email'
import { getStripe } from '@/lib/stripe'

import type Stripe from 'stripe'

/**
 * Webhook Stripe : à chaque commande payée, prévient l'équipe par e-mail.
 *
 * Le reçu client est envoyé par Stripe lui-même (à activer dans le dashboard),
 * et la commande reste consultable dans Stripe : pas de base de données à tenir.
 *
 * À déclarer dans Stripe → Developers → Webhooks, URL `/api/stripe/webhook`,
 * événements `checkout.session.completed` et `checkout.session.async_payment_succeeded`.
 */
export async function POST(request: Request) {
  const stripe = getStripe()
  if (!stripe || !env.STRIPE_WEBHOOK_SECRET) {
    return new Response('Stripe webhook not configured', { status: 503 })
  }

  const signature = request.headers.get('stripe-signature')
  if (!signature) return new Response('Missing signature', { status: 400 })

  let event: Stripe.Event
  try {
    // Le corps brut est indispensable : la signature porte sur les octets reçus.
    event = await stripe.webhooks.constructEventAsync(
      await request.text(),
      signature,
      env.STRIPE_WEBHOOK_SECRET
    )
  } catch (error) {
    console.error('Stripe webhook signature error:', error)
    return new Response('Invalid signature', { status: 400 })
  }

  switch (event.type) {
    case 'checkout.session.completed':
    case 'checkout.session.async_payment_succeeded': {
      const session = event.data.object
      // Un paiement différé (virement…) déclenche `completed` avant d'être encaissé :
      // on attend alors `async_payment_succeeded`.
      if (session.payment_status !== 'paid') break

      const { data: lineItems } = await stripe.checkout.sessions.listLineItems(session.id, {
        limit: 100,
      })
      await notifyTeam(session, lineItems)
      break
    }
  }

  return Response.json({ received: true })
}

async function notifyTeam(session: Stripe.Checkout.Session, lineItems: Stripe.LineItem[]) {
  const { subject, html, text } = buildOrderNotification(session, lineItems)

  if (!env.RESEND_API_KEY || !env.ORDER_EMAIL_FROM || !env.ORDER_EMAIL_TO) {
    // Sans Resend, la commande reste visible dans Stripe ; on la trace dans les logs.
    console.info(`${subject}\n${text}`)
    return
  }

  const { error } = await new Resend(env.RESEND_API_KEY).emails.send(
    {
      from: env.ORDER_EMAIL_FROM,
      to: env.ORDER_EMAIL_TO,
      replyTo: session.customer_details?.email ?? undefined,
      subject,
      html,
      text,
    },
    // Stripe relivre un événement tant qu'il n'a pas reçu de 2xx : la clé
    // d'idempotence évite d'envoyer deux fois le même e-mail.
    { idempotencyKey: `order-${session.id}` }
  )

  if (error) {
    console.error('Order notification email error:', error)
    // Une erreur 500 fait relivrer l'événement par Stripe, donc renvoyer l'e-mail.
    throw new Error('Order notification failed')
  }
}
