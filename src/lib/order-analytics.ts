import { createHash } from 'node:crypto'

import { POSTHOG_DISTINCT_ID_FIELD, resolveServerIdentity } from '@/lib/posthog-identity'

import type Stripe from 'stripe'

/**
 * UUID stable dérivé d'une graine : Stripe relivre un événement tant qu'il n'a
 * pas reçu de 2xx, et PostHog déduplique les événements de même UUID.
 */
export function stableUuid(seed: string): string {
  const hex = createHash('sha256').update(seed).digest('hex')
  // Mise en forme v4 (bits de version et de variante) pour passer la validation.
  const variant = ((parseInt(hex[16], 16) & 0x3) | 0x8).toString(16)
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-4${hex.slice(13, 16)}-${variant}${hex.slice(17, 20)}-${hex.slice(20, 32)}`
}

/** Relit le résumé `googlex3,instagramx1` posé dans les métadonnées par `buildCheckoutSessionParams`. */
export function parseCartSummary(summary: string | undefined) {
  const lines = (summary ?? '')
    .split(',')
    .map((part) => /^([a-z]+)x(\d+)$/.exec(part.trim()))
    .filter((match) => match !== null)
    .map(([, platform, quantity]) => ({ platform, quantity: Number(quantity) }))
  return {
    platforms: lines.map((line) => line.platform),
    quantity: lines.reduce((sum, line) => sum + line.quantity, 0),
  }
}

/**
 * Événement `order_completed` pour une session Checkout payée. Aucune donnée
 * personnelle : ni e-mail, ni nom, ni adresse, seulement la commande.
 */
export function buildOrderCompletedEvent(session: Stripe.Checkout.Session, paidAt: Date) {
  const metadata = session.metadata ?? {}
  // Une commande sans identifiant PostHog (visiteur sans cookie, ancienne
  // session) reste comptée, rattachée à un identifiant propre à la commande.
  const identity = resolveServerIdentity(
    metadata.posthog_anonymous === 'true' ? undefined : metadata[POSTHOG_DISTINCT_ID_FIELD],
    undefined,
    () => metadata[POSTHOG_DISTINCT_ID_FIELD] ?? `order_${session.id}`
  )
  const cart = parseCartSummary(metadata.cart)
  const discount = session.total_details?.amount_discount ?? 0

  return {
    distinctId: identity.distinctId,
    event: 'order_completed',
    uuid: stableUuid(`order_completed:${session.id}`),
    timestamp: paidAt,
    properties: {
      ...identity.properties,
      stripe_checkout_session_id: session.id,
      revenue: (session.amount_total ?? 0) / 100,
      currency: (session.currency ?? 'eur').toUpperCase(),
      cart_quantity: cart.quantity,
      platforms: cart.platforms,
      volume_tier: metadata.volume_tier ?? 'aucun',
      promo_code_used: discount > 0,
      promo_discount: discount / 100,
      shipping_country: session.customer_details?.address?.country ?? undefined,
      ...(identity.anonymous
        ? {}
        : {
            $set: { has_ordered: true },
            $set_once: { first_order_at: paidAt.toISOString() },
          }),
    },
  }
}
