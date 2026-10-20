'use server'

import { redirect } from 'next/navigation'

import { cartSchema } from '@/lib/cart'
import { buildCheckoutSessionParams } from '@/lib/checkout'
import { getStripe } from '@/lib/stripe'

export type CheckoutState = { error: string | null }

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
  const stripe = getStripe()
  if (!stripe) {
    return { error: 'Le paiement en ligne est momentanément indisponible. Contactez-nous.' }
  }

  let raw: unknown
  try {
    raw = JSON.parse(String(formData.get('cart') ?? '[]'))
  } catch {
    return { error: 'Votre panier est illisible. Rechargez la page et réessayez.' }
  }

  const parsed = cartSchema.safeParse(raw)
  if (!parsed.success) {
    return { error: 'Votre panier contient un article invalide. Rechargez la page et réessayez.' }
  }

  let url: string | null
  try {
    const session = await stripe.checkout.sessions.create(buildCheckoutSessionParams(parsed.data))
    url = session.url
  } catch (error) {
    console.error('Stripe checkout session error:', error)
    return { error: 'Le paiement n’a pas pu démarrer. Merci de réessayer dans un instant.' }
  }

  if (!url) return { error: 'Le paiement n’a pas pu démarrer. Merci de réessayer.' }

  // Hors du try : `redirect` lève une exception que Next intercepte.
  redirect(url)
}
