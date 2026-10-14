import { describe, expect, test } from 'bun:test'

import { PLATES } from '@/config/catalog'
import { CART_LIMITS } from '@/config/site'
import { cartSchema, countItems, normalizeCart, parseCart, priceCart } from '@/lib/cart'

describe('parseCart', () => {
  test('ignore les lignes invalides et fusionne les doublons', () => {
    const cart = parseCart([
      { slug: 'plaque-google', quantity: 2 },
      { slug: 'plaque-inconnue', quantity: 1 },
      { slug: 'plaque-google', quantity: 1 },
      { slug: 'plaque-instagram', quantity: -3 },
      'n’importe quoi',
    ])
    expect(cart).toEqual([{ slug: 'plaque-google', quantity: 3 }])
  })

  test('renvoie un panier vide pour une valeur qui n’est pas un tableau', () => {
    expect(parseCart({ slug: 'plaque-google' })).toEqual([])
    expect(parseCart(null)).toEqual([])
  })
})

describe('normalizeCart', () => {
  test('borne la quantité fusionnée au maximum autorisé', () => {
    const cart = normalizeCart([
      { slug: 'plaque-google', quantity: CART_LIMITS.maxQuantityPerLine },
      { slug: 'plaque-google', quantity: 5 },
    ])
    expect(cart).toEqual([{ slug: 'plaque-google', quantity: CART_LIMITS.maxQuantityPerLine }])
  })
})

describe('priceCart', () => {
  test('calcule les montants depuis le catalogue', () => {
    const google = PLATES.find((plate) => plate.slug === 'plaque-google')!
    const tiktok = PLATES.find((plate) => plate.slug === 'plaque-tiktok')!
    const { lines, subtotal } = priceCart([
      { slug: 'plaque-google', quantity: 2 },
      { slug: 'plaque-tiktok', quantity: 1 },
    ])
    expect(lines.map((line) => line.lineTotal)).toEqual([google.unitAmount * 2, tiktok.unitAmount])
    expect(subtotal).toBe(google.unitAmount * 2 + tiktok.unitAmount)
    expect(countItems(lines)).toBe(3)
  })
})

describe('cartSchema', () => {
  test('refuse un panier vide, un prix injecté reste ignoré', () => {
    expect(cartSchema.safeParse([]).success).toBe(false)
    const parsed = cartSchema.parse([{ slug: 'plaque-google', quantity: 1, unitAmount: 1 }])
    expect(parsed).toEqual([{ slug: 'plaque-google', quantity: 1 }])
  })

  test('refuse une quantité hors bornes', () => {
    expect(cartSchema.safeParse([{ slug: 'plaque-google', quantity: 0 }]).success).toBe(false)
    expect(
      cartSchema.safeParse([
        { slug: 'plaque-google', quantity: CART_LIMITS.maxQuantityPerLine + 1 },
      ]).success
    ).toBe(false)
  })
})
