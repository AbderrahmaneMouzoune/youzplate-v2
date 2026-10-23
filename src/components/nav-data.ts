import { GOAL_LABELS, PLATES } from '@/config/catalog'
import { metierPath, metiersByFamily, METIERS } from '@/data/metiers'
import { formatPrice } from '@/lib/format'

/**
 * Données du menu, préparées côté serveur : les composants client ne
 * reçoivent que des libellés et des URLs, pas tout le contenu des métiers.
 */
export type NavPlate = {
  href: string
  name: string
  goal: string
  price: string
  image: string
  tint: string
}

export type NavGroup = { label: string; links: { name: string; href: string }[] }

export type NavData = {
  plates: NavPlate[]
  /** Familles de métiers réparties en colonnes équilibrées. */
  metierColumns: NavGroup[][]
  metierCount: number
}

/** Répartit les familles en `count` colonnes de hauteur proche, dans l'ordre. */
function balance(groups: NavGroup[], count: number): NavGroup[][] {
  const total = groups.reduce((sum, group) => sum + group.links.length + 1, 0)
  const target = total / count
  const columns: NavGroup[][] = [[]]
  let height = 0
  for (const group of groups) {
    const size = group.links.length + 1
    if (height > 0 && height + size / 2 > target && columns.length < count) {
      columns.push([])
      height = 0
    }
    columns[columns.length - 1].push(group)
    height += size
  }
  return columns
}

export function getNavData(): NavData {
  return {
    plates: PLATES.map((plate) => ({
      href: `/${plate.slug}`,
      name: plate.name,
      goal: GOAL_LABELS[plate.goal],
      price: formatPrice(plate.unitAmount),
      image: plate.image,
      tint: plate.tint,
    })),
    metierColumns: balance(
      metiersByFamily().map((group) => ({
        label: group.label,
        links: group.metiers.map((metier) => ({ name: metier.name, href: metierPath(metier) })),
      })),
      4
    ),
    metierCount: METIERS.length,
  }
}

export const RESOURCES = [
  {
    href: '/qr-code-avis-google',
    title: 'QR code avis Google gratuit',
    text: 'Générez le QR code de votre fiche en 30 secondes.',
  },
  {
    href: '/guides',
    title: 'Guides de configuration',
    text: 'Où trouver le bon lien, plateforme par plateforme.',
  },
  {
    href: '/plaque-avis-google-francaise',
    title: 'Plaque française ou importée ?',
    text: 'Le comparatif avant d’acheter.',
  },
  { href: '/#faq', title: 'Questions fréquentes', text: 'Abonnement, compatibilité, livraison.' },
]
