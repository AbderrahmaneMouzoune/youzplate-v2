import { describe, expect, test } from 'bun:test'

import { getPlate } from '@/config/catalog'
import { SHIPPING } from '@/config/site'
import { buildCheckoutSessionParams } from '@/lib/checkout'
import { discountedUnitAmount } from '@/lib/pricing'

describe('buildCheckoutSessionParams', () => {
  const params = buildCheckoutSessionParams([
    { slug: 'plaque-avis-google', quantity: 3 },
    { slug: 'plaque-instagram', quantity: 1 },
  ])

  test('reprend les prix du catalogue serveur', () => {
    expect(params.line_items).toHaveLength(2)
    const [google] = params.line_items!
    expect(google.quantity).toBe(3)
    // 4 plaques au total : palier −10 %, intégré au prix unitaire.
    expect(google.price_data?.unit_amount).toBe(
      discountedUnitAmount(getPlate('plaque-avis-google')!.unitAmount, 4)
    )
    expect(google.price_data?.product_data?.description).toContain('Pack Duo')
    expect(google.price_data?.currency).toBe('eur')
    expect(google.price_data?.product_data?.images?.[0]).toBe(
      'https://youzplate.test/plaques/google.webp'
    )
  })

  test('collecte l’adresse de livraison dans les pays desservis', () => {
    expect(params.shipping_address_collection?.allowed_countries).toEqual([...SHIPPING.countries])
    expect(params.shipping_options?.[0]?.shipping_rate_data?.fixed_amount?.amount).toBe(
      SHIPPING.amount
    )
  })

  test('renvoie vers la page de confirmation avec l’identifiant de session', () => {
    expect(params.success_url).toBe(
      'https://youzplate.test/commande/confirmation?session_id={CHECKOUT_SESSION_ID}'
    )
    expect(params.cancel_url).toBe('https://youzplate.test/panier')
    expect(params.metadata?.cart).toBe('googlex3,instagramx1')
    expect(params.metadata?.volume_tier).toBe('Pack Duo')
  })
})
