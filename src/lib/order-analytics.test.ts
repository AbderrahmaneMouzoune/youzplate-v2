import { describe, expect, test } from 'bun:test'

import { buildOrderCompletedEvent, parseCartSummary, stableUuid } from '@/lib/order-analytics'

import type Stripe from 'stripe'

const paidAt = new Date('2026-10-23T10:00:00Z')

function session(metadata: Record<string, string>): Stripe.Checkout.Session {
  return {
    id: 'cs_test_123',
    amount_total: 5382,
    currency: 'eur',
    metadata: { cart: 'googlex1,instagramx1', volume_tier: 'Pack Duo', ...metadata },
    total_details: { amount_discount: 0, amount_shipping: 0, amount_tax: 0 },
    customer_details: { email: 'client@example.com', address: { country: 'FR' } },
  } as unknown as Stripe.Checkout.Session
}

describe('stableUuid', () => {
  test('même graine, même UUID valide', () => {
    const uuid = stableUuid('order_completed:cs_test_123')
    expect(uuid).toBe(stableUuid('order_completed:cs_test_123'))
    expect(uuid).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/)
    expect(uuid).not.toBe(stableUuid('order_completed:cs_test_456'))
  })
})

describe('parseCartSummary', () => {
  test('relit plateformes et quantités', () => {
    expect(parseCartSummary('googlex3,instagramx1')).toEqual({
      platforms: ['google', 'instagram'],
      quantity: 4,
    })
    expect(parseCartSummary(undefined)).toEqual({ platforms: [], quantity: 0 })
  })
})

describe('buildOrderCompletedEvent', () => {
  test('rattache la commande au visiteur et marque la personne comme cliente', () => {
    const event = buildOrderCompletedEvent(session({ posthog_distinct_id: 'visitor-1' }), paidAt)
    expect(event.distinctId).toBe('visitor-1')
    expect(event.timestamp).toBe(paidAt)
    expect(event.properties).toMatchObject({
      revenue: 53.82,
      currency: 'EUR',
      cart_quantity: 2,
      platforms: ['google', 'instagram'],
      volume_tier: 'Pack Duo',
      promo_code_used: false,
      $set: { has_ordered: true },
    })
  })

  test('visiteur anonyme : même identifiant que la session de paiement, sans profil', () => {
    const event = buildOrderCompletedEvent(
      session({ posthog_distinct_id: 'tmp-uuid', posthog_anonymous: 'true' }),
      paidAt
    )
    expect(event.distinctId).toBe('tmp-uuid')
    expect(event.properties).toMatchObject({ $process_person_profile: false })
    expect(event.properties).not.toHaveProperty('$set')
  })

  test('aucune donnée personnelle dans les propriétés', () => {
    const event = buildOrderCompletedEvent(session({}), paidAt)
    expect(event.distinctId).toBe('order_cs_test_123')
    expect(JSON.stringify(event.properties)).not.toContain('client@example.com')
  })
})
