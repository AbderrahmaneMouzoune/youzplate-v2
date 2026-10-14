import { describe, expect, test } from 'bun:test'

import { priceCart } from '@/lib/cart'
import { discountedUnitAmount, nextTier, tierFor } from '@/lib/pricing'

describe('paliers de remise', () => {
  test('aucune remise pour une plaque, −10 % dès 2, −20 % dès 5', () => {
    expect(tierFor(1)).toBeNull()
    expect(tierFor(2)?.rate).toBe(0.1)
    expect(tierFor(4)?.rate).toBe(0.1)
    expect(tierFor(5)?.rate).toBe(0.2)
    expect(tierFor(12)?.rate).toBe(0.2)
  })

  test('annonce le prochain palier', () => {
    expect(nextTier(1)?.minQuantity).toBe(2)
    expect(nextTier(3)?.minQuantity).toBe(5)
    expect(nextTier(5)).toBeNull()
  })

  test('arrondit le prix unitaire au centime', () => {
    expect(discountedUnitAmount(2990, 1)).toBe(2990)
    expect(discountedUnitAmount(2990, 2)).toBe(2691)
    expect(discountedUnitAmount(2990, 5)).toBe(2392)
  })
})

describe('priceCart et remises', () => {
  test('la remise compte toutes les plateformes du panier', () => {
    const cart = priceCart([
      { slug: 'plaque-avis-google', quantity: 1 },
      { slug: 'plaque-instagram', quantity: 1 },
    ])
    expect(cart.quantity).toBe(2)
    expect(cart.subtotal).toBe(5980)
    expect(cart.total).toBe(5382)
    expect(cart.discount).toBe(598)
    expect(cart.tier?.label).toBe('Pack Duo')
  })

  test('5 plaques passent à −20 %', () => {
    const cart = priceCart([{ slug: 'plaque-avis-google', quantity: 5 }])
    expect(cart.total).toBe(2392 * 5)
  })
})
