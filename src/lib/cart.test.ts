import { describe, expect, test } from 'bun:test'

import { PLATES } from '@/config/catalog'
import { CART_LIMITS } from '@/config/site'
import { cartSchema, countItems, normalizeCart, parseCart, priceCart } from '@/lib/cart'

describe('parseCart', () => {
  test('ignore les lignes invalides et fusionne les doublons', () => {
    const cart = parseCart([
      { slug: 'plaque-avis-google', quantity: 2 },
      { slug: 'plaque-inconnue', quantity: 1 },
      { slug: 'plaque-avis-google', quantity: 1 },
      { slug: 'plaque-instagram', quantity: -3 },
      'n’importe quoi',
    ])
    expect(cart).toEqual([{ slug: 'plaque-avis-google', quantity: 3 }])
  })

  test('renvoie un panier vide pour une valeur qui n’est pas un tableau', () => {
    expect(parseCart({ slug: 'plaque-avis-google' })).toEqual([])
    expect(parseCart(null)).toEqual([])
  })
})

describe('normalizeCart', () => {
  test('borne la quantité fusionnée au maximum autorisé', () => {
    const cart = normalizeCart([
      { slug: 'plaque-avis-google', quantity: CART_LIMITS.maxQuantityPerLine },
      { slug: 'plaque-avis-google', quantity: 5 },
    ])
    expect(cart).toEqual([{ slug: 'plaque-avis-google', quantity: CART_LIMITS.maxQuantityPerLine }])
  })
})

describe('priceCart', () => {
  test('calcule les montants depuis le catalogue', () => {
    const google = PLATES.find((plate) => plate.slug === 'plaque-avis-google')!
    const tiktok = PLATES.find((plate) => plate.slug === 'plaque-tiktok')!
    const { lines, subtotal } = priceCart([
      { slug: 'plaque-avis-google', quantity: 2 },
      { slug: 'plaque-tiktok', quantity: 1 },
    ])
    expect(subtotal).toBe(google.unitAmount * 2 + tiktok.unitAmount)
    expect(lines.map((line) => line.lineTotal)).toEqual([
      lines[0].unitAmount * 2,
      lines[1].unitAmount,
    ])
    expect(lines[0].unitAmount).toBeLessThan(google.unitAmount)
    expect(countItems(lines)).toBe(3)
  })
})

describe('cartSchema', () => {
  test('refuse un panier vide, un prix injecté reste ignoré', () => {
    expect(cartSchema.safeParse([]).success).toBe(false)
    const parsed = cartSchema.parse([{ slug: 'plaque-avis-google', quantity: 1, unitAmount: 1 }])
    expect(parsed).toEqual([{ slug: 'plaque-avis-google', quantity: 1 }])
  })

  test('refuse une quantité hors bornes', () => {
    expect(cartSchema.safeParse([{ slug: 'plaque-avis-google', quantity: 0 }]).success).toBe(false)
    expect(
      cartSchema.safeParse([
        { slug: 'plaque-avis-google', quantity: CART_LIMITS.maxQuantityPerLine + 1 },
      ]).success
    ).toBe(false)
  })
})
