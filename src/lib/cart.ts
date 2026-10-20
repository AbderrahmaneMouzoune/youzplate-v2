import { z } from 'zod'

import { getPlate, PLATE_SLUGS, type Plate, type PlateSlug } from '@/config/catalog'
import { CART_LIMITS } from '@/config/site'
import { discountedUnitAmount, tierFor, type VolumeTier } from '@/lib/pricing'

/**
 * Le panier ne stocke que des slugs et des quantités : jamais de prix.
 * Ce schéma valide aussi bien ce qui sort du localStorage que ce que le
 * serveur reçoit au moment du paiement.
 */
export const cartLineSchema = z.object({
  slug: z.enum(PLATE_SLUGS),
  quantity: z.number().int().min(1).max(CART_LIMITS.maxQuantityPerLine),
})

export const cartSchema = z.array(cartLineSchema).min(1).max(PLATE_SLUGS.length)

export type CartLine = z.infer<typeof cartLineSchema>

export type PricedCartLine = CartLine & {
  plate: Plate
  /** Prix unitaire après remise de volume. */
  unitAmount: number
  lineTotal: number
}

export type PricedCart = {
  lines: PricedCartLine[]
  /** Somme au prix catalogue, avant remise. */
  subtotal: number
  discount: number
  total: number
  quantity: number
  tier: VolumeTier | null
}

/** Fusionne les doublons et borne les quantités, pour un panier toujours valide. */
export function normalizeCart(lines: CartLine[]): CartLine[] {
  const merged = new Map<PlateSlug, number>()
  for (const line of lines) {
    merged.set(line.slug, (merged.get(line.slug) ?? 0) + line.quantity)
  }
  return [...merged].map(([slug, quantity]) => ({
    slug,
    quantity: Math.min(Math.max(1, Math.floor(quantity)), CART_LIMITS.maxQuantityPerLine),
  }))
}

/** Relit un panier inconnu (localStorage, requête) en ignorant les lignes invalides. */
export function parseCart(raw: unknown): CartLine[] {
  if (!Array.isArray(raw)) return []
  const lines = raw.flatMap((entry) => {
    const parsed = cartLineSchema.safeParse(entry)
    return parsed.success ? [parsed.data] : []
  })
  return normalizeCart(lines)
}

export function countItems(lines: CartLine[]): number {
  return lines.reduce((sum, line) => sum + line.quantity, 0)
}

/** Associe chaque ligne à son produit et calcule les montants depuis le catalogue. */
export function priceCart(lines: CartLine[]): PricedCart {
  const known = lines.flatMap((line) => {
    const plate = getPlate(line.slug)
    return plate ? [{ ...line, plate }] : []
  })
  const quantity = countItems(known)

  const priced = known.map((line) => {
    const unitAmount = discountedUnitAmount(line.plate.unitAmount, quantity)
    return { ...line, unitAmount, lineTotal: unitAmount * line.quantity }
  })
  const subtotal = known.reduce((sum, line) => sum + line.plate.unitAmount * line.quantity, 0)
  const total = priced.reduce((sum, line) => sum + line.lineTotal, 0)

  return {
    lines: priced,
    subtotal,
    discount: subtotal - total,
    total,
    quantity,
    tier: tierFor(quantity),
  }
}
