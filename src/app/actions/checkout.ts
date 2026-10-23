'use server'

import { redirect } from 'next/navigation'

import { cartSchema, priceCart } from '@/lib/cart'
import { buildCheckoutSessionParams } from '@/lib/checkout'
import {
  POSTHOG_DISTINCT_ID_FIELD,
  POSTHOG_SESSION_ID_FIELD,
  resolveServerIdentity,
} from '@/lib/posthog-identity'
import { captureServerEvent, captureServerException } from '@/lib/posthog-server'
import { getStripe } from '@/lib/stripe'

export type CheckoutState = { error: string | null }

type FailureReason = 'stripe_unavailable' | 'unreadable_cart' | 'invalid_cart' | 'stripe_error'

/**
 * Crée une session Stripe Checkout et y redirige le client.
 *
 * Le formulaire du panier envoie le panier sérialisé dans un champ caché : il
 * est revalidé ici, et les prix sont relus depuis le catalogue serveur.
 */
export async function startCheckout(
  _previous: CheckoutState,
  formData: FormData
): Promise<CheckoutState> {
  const identity = resolveServerIdentity(
    formData.get(POSTHOG_DISTINCT_ID_FIELD),
    formData.get(POSTHOG_SESSION_ID_FIELD)
  )
  const fail = async (reason: FailureReason, error: string): Promise<CheckoutState> => {
    await captureServerEvent({
      distinctId: identity.distinctId,
      event: 'checkout_failed',
      properties: { ...identity.properties, reason },
    })
    return { error }
  }

  const stripe = getStripe()
  if (!stripe) {
    return fail(
      'stripe_unavailable',
      'Le paiement en ligne est momentanément indisponible. Contactez-nous.'
    )
  }

  let raw: unknown
  try {
    raw = JSON.parse(String(formData.get('cart') ?? '[]'))
  } catch {
    return fail('unreadable_cart', 'Votre panier est illisible. Rechargez la page et réessayez.')
  }

  const parsed = cartSchema.safeParse(raw)
  if (!parsed.success) {
    return fail(
      'invalid_cart',
      'Votre panier contient un article invalide. Rechargez la page et réessayez.'
    )
  }

  let url: string | null
  try {
    const session = await stripe.checkout.sessions.create(
      buildCheckoutSessionParams(parsed.data, {
        // Relu par le webhook pour attribuer `order_completed` au même visiteur.
        [POSTHOG_DISTINCT_ID_FIELD]: identity.distinctId,
        ...(identity.anonymous ? { posthog_anonymous: 'true' } : {}),
      })
    )
    url = session.url

    const priced = priceCart(parsed.data)
    await captureServerEvent({
      distinctId: identity.distinctId,
      event: 'checkout_session_created',
      properties: {
        ...identity.properties,
        stripe_checkout_session_id: session.id,
        cart_quantity: priced.quantity,
        cart_value: priced.total / 100,
        cart_discount: priced.discount / 100,
        volume_tier: priced.tier?.label ?? 'aucun',
        plate_slugs: priced.lines.map((line) => line.slug),
        currency: 'EUR',
      },
    })
  } catch (error) {
    console.error('Stripe checkout session error:', error)
    await captureServerException(error, identity.distinctId, identity.properties)
    return fail(
      'stripe_error',
      'Le paiement n’a pas pu démarrer. Merci de réessayer dans un instant.'
    )
  }

  if (!url) return fail('stripe_error', 'Le paiement n’a pas pu démarrer. Merci de réessayer.')

  // Hors du try : `redirect` lève une exception que Next intercepte.
  redirect(url)
}
