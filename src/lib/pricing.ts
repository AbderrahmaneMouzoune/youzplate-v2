/**
 * Remises par volume : elles portent sur le nombre total de plaques du panier,
 * toutes plateformes confondues (un Google + un Instagram = pack Duo).
 *
 * Paliers du plus haut au plus bas : le premier atteint s'applique.
 * TODO(prix) : paliers proposés dans la maquette, à confirmer.
 */
export const VOLUME_TIERS = [
  { minQuantity: 5, rate: 0.2, label: 'Pack Établissement' },
  { minQuantity: 2, rate: 0.1, label: 'Pack Duo' },
] as const

export type VolumeTier = (typeof VOLUME_TIERS)[number]

export function tierFor(totalQuantity: number): VolumeTier | null {
  return VOLUME_TIERS.find((tier) => totalQuantity >= tier.minQuantity) ?? null
}

/** Prochain palier à atteindre, ou `null` si le meilleur est déjà acquis. */
export function nextTier(totalQuantity: number): VolumeTier | null {
  return [...VOLUME_TIERS].reverse().find((tier) => totalQuantity < tier.minQuantity) ?? null
}

/** Prix unitaire après remise, arrondi au centime. */
export function discountedUnitAmount(unitAmount: number, totalQuantity: number): number {
  const tier = tierFor(totalQuantity)
  return tier ? Math.round(unitAmount * (1 - tier.rate)) : unitAmount
}

/** « −10 % » pour l'affichage. */
export function formatRate(rate: number): string {
  return `−${Math.round(rate * 100)} %`
}
