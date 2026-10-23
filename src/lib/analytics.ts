import posthog from 'posthog-js'

import { getPlate, type PlateSlug } from '@/config/catalog'
import { priceCart, type CartLine } from '@/lib/cart'
import { cart } from '@/lib/cart-store'
import { POSTHOG_DISTINCT_ID_FIELD, POSTHOG_SESSION_ID_FIELD } from '@/lib/posthog-identity'

/**
 * Aides de mesure côté navigateur. Les montants sont envoyés en euros
 * (PostHog les somme et les affiche tels quels) ; aucune donnée personnelle :
 * uniquement des plaques, des quantités et des montants.
 */

export type AddToCartSource = 'buy_box' | 'quick_add' | 'bundle' | 'cart_upsell'

const euros = (cents: number) => cents / 100

/** État du panier, joint aux événements du parcours d'achat. */
export function cartProperties(lines: CartLine[] = cart.lines()) {
  const priced = priceCart(lines)
  return {
    cart_quantity: priced.quantity,
    cart_lines: priced.lines.length,
    cart_value: euros(priced.total),
    cart_discount: euros(priced.discount),
    volume_tier: priced.tier?.label ?? 'aucun',
    currency: 'EUR',
  }
}

export function plateProperties(slug: PlateSlug) {
  const plate = getPlate(slug)
  return { plate_slug: slug, platform: plate?.platform, goal: plate?.goal }
}

/** À appeler juste après `cart.add` : le panier joint inclut donc l'ajout. */
export function trackAddToCart(items: CartLine[], source: AddToCartSource) {
  const quantity = items.reduce((sum, item) => sum + item.quantity, 0)
  const listValue = items.reduce(
    (sum, item) => sum + (getPlate(item.slug)?.unitAmount ?? 0) * item.quantity,
    0
  )
  posthog.capture('product_added_to_cart', {
    source,
    ...(items.length === 1 ? plateProperties(items[0].slug) : {}),
    plate_slugs: items.map((item) => item.slug),
    platforms: items.map((item) => getPlate(item.slug)?.platform),
    quantity,
    value: euros(listValue),
    ...cartProperties(),
  })
}

/**
 * Joint l'identité PostHog du visiteur au formulaire de paiement, pour que
 * les événements serveur (`checkout_session_created`, `order_completed`)
 * soient rattachés à la même personne.
 */
export function attachPostHogIdentity(formData: FormData) {
  if (!posthog.__loaded) return
  const distinctId = posthog.get_distinct_id()
  const sessionId = posthog.get_session_id()
  if (distinctId) formData.set(POSTHOG_DISTINCT_ID_FIELD, distinctId)
  if (sessionId) formData.set(POSTHOG_SESSION_ID_FIELD, sessionId)
}
