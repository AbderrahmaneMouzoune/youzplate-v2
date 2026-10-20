import { getPlateByPlatform, type PlateSlug } from '@/config/catalog'

import { METIERS_AUTO_SERVICES_SANTE } from './auto-services-sante'
import { METIERS_BEAUTE_COMMERCE } from './beaute-commerce'
import { METIERS_RESTAURATION_HEBERGEMENT } from './restauration-hebergement'

import type { Metier, MetierFamily } from './types'

export type { Metier, MetierFamily } from './types'

/** Toutes les pages métier, dans l'ordre d'affichage du hub. */
export const METIERS: Metier[] = [
  ...METIERS_RESTAURATION_HEBERGEMENT,
  ...METIERS_BEAUTE_COMMERCE,
  ...METIERS_AUTO_SERVICES_SANTE,
]

export const FAMILY_LABELS: Record<MetierFamily, string> = {
  restauration: 'Restauration',
  hebergement: 'Hébergement et tourisme',
  beaute: 'Beauté et bien-être',
  commerce: 'Commerces',
  auto: 'Automobile',
  services: 'Services',
  sante: 'Santé (prise de rendez-vous Doctolib)',
}

export function metierPlateSlug(metier: Metier): PlateSlug {
  return getPlateByPlatform(metier.platform).slug
}

/** URL de la page : `/plaque-avis-google/restaurant`. */
export function metierPath(metier: Metier): string {
  return `/${metierPlateSlug(metier)}/${metier.slug}`
}

export function getMetier(plateSlug: string, slug: string): Metier | undefined {
  return METIERS.find((metier) => metier.slug === slug && metierPlateSlug(metier) === plateSlug)
}

export function metiersForPlate(plateSlug: PlateSlug): Metier[] {
  return METIERS.filter((metier) => metierPlateSlug(metier) === plateSlug)
}

export function metiersByFamily(): { family: MetierFamily; label: string; metiers: Metier[] }[] {
  return (Object.keys(FAMILY_LABELS) as MetierFamily[])
    .map((family) => ({
      family,
      label: FAMILY_LABELS[family],
      metiers: METIERS.filter((metier) => metier.family === family),
    }))
    .filter((group) => group.metiers.length > 0)
}

/** Métiers mis en avant dans le pied de page. */
export const FEATURED_METIERS = ['restaurant', 'coiffeur', 'hotel', 'garage', 'osteopathe']
  .flatMap((slug) => METIERS.filter((metier) => metier.slug === slug))
  .map((metier) => ({ name: metier.name, path: metierPath(metier) }))
