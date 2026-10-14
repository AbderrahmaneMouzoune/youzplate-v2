import { env } from '@/env'

/** URL de la vitrine Youzoune, qui héberge le blog et les guides. */
export const YOUZOUNE_URL = 'https://www.youzoune.com'

export const SITE = {
  name: 'Youzplate',
  /** Accroche courte, reprise dans le title de l'accueil et l'Open Graph. */
  tagline: 'Plaques QR code et NFC pour booster vos avis et vos abonnés',
  description:
    'Plaques QR code et NFC sans abonnement pour récolter des avis Google, TripAdvisor ou Doctolib et gagner des abonnés Instagram, TikTok ou Snapchat. Lien modifiable à vie.',
  url: env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, ''),
  locale: 'fr_FR',
  contact: {
    email: 'contact@youzoune.com',
    phone: '07 44 31 95 70',
    phoneHref: 'tel:+33744319570',
    whatsapp: 'https://wa.me/33744319570',
  },
} as const

/**
 * Éditeur et vendeur : la boutique est une activité de Youzoune, les mentions
 * reprennent donc celles de la vitrine (`youzoune-vitrine/src/config/legal.config.ts`).
 * À tenir synchronisées si l'immatriculation change.
 */
export const LEGAL_ENTITY = {
  tradeName: 'Youzoune',
  legalName: 'Ahmed Mouzoune',
  legalForm: 'Entrepreneur individuel (micro-entreprise)',
  siren: '979 604 246',
  siret: '979 604 246 00012',
  vatNumber: 'FR64979604246',
  address: '13 B quai Alfred Sisley, 92390 Villeneuve-la-Garenne, France',
  publicationDirector: 'Ahmed Mouzoune',
} as const

export const LEGAL_LAST_UPDATED = '2026-10-14'

/** Livraison : une seule offre, affichée sur les fiches et appliquée au checkout. */
export const SHIPPING = {
  /** Frais en centimes. 0 = livraison offerte. */
  amount: 0,
  label: 'Livraison offerte en lettre suivie',
  minBusinessDays: 3,
  maxBusinessDays: 7,
  /** Pays où Stripe accepte une adresse de livraison (codes ISO 3166-1 alpha-2). */
  countries: ['FR', 'BE', 'LU', 'CH', 'MC'] as const,
  /** Les mêmes pays, en toutes lettres, pour les textes. */
  zoneLabel: 'France, Belgique, Luxembourg, Suisse et Monaco',
} as const

/** Garde-fous du panier, appliqués côté client et revalidés côté serveur. */
export const CART_LIMITS = {
  maxQuantityPerLine: 50,
} as const
