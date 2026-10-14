import { z } from 'zod'

import { getPlate, PLATES, type Plate, type PlateSlug } from '@/config/catalog'
import { CART_LIMITS } from '@/config/site'

/**
 * Le panier ne stocke que des slugs et des quantités : jamais de prix.
 * Ce schéma valide aussi bien ce qui sort du localStorage que ce que le
 * serveur reçoit au moment du paiement.
 */
export const cartLineSchema = z.object({
  slug: z.enum(PLATES.map((plate) => plate.slug) as [PlateSlug, ...PlateSlug[]]),
  quantity: z.number().int().min(1).max(CART_LIMITS.maxQuantityPerLine),
})

export const cartSchema = z.array(cartLineSchema).min(1).max(PLATES.length)

export type CartLine = z.infer<typeof cartLineSchema>

export type PricedCartLine = CartLine & { plate: Plate; lineTotal: number }

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

/** Associe chaque ligne à son produit et calcule les montants depuis le catalogue. */
export function priceCart(lines: CartLine[]): { lines: PricedCartLine[]; subtotal: number } {
  const priced = lines.flatMap((line) => {
    const plate = getPlate(line.slug)
    if (!plate) return []
    return [{ ...line, plate, lineTotal: plate.unitAmount * line.quantity }]
  })
  return { lines: priced, subtotal: priced.reduce((sum, line) => sum + line.lineTotal, 0) }
}

export function countItems(lines: CartLine[]): number {
  return lines.reduce((sum, line) => sum + line.quantity, 0)
}
