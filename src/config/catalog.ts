import type { GuideSlug } from '@/config/guides'

/**
 * Catalogue de la boutique.
 *
 * Le catalogue vit dans le code plutôt que dans Stripe ou un CMS : six produits
 * qui bougent rarement, et surtout une source de prix que le serveur contrôle.
 * Le panier n'envoie que des slugs et des quantités, le prix est toujours relu
 * ici au moment de créer la session Stripe.
 *
 * Les slugs suivent les requêtes réellement tapées (« plaque avis google »,
 * « plaque avis tripadvisor ») ; les anciennes URLs (`/produits/plaque-google`,
 * `/plaques/plaque-google`) sont redirigées dans `next.config.ts`.
 */

export const PLATFORMS = [
  'google',
  'instagram',
  'tiktok',
  'tripadvisor',
  'doctolib',
  'snapchat',
] as const

export type Platform = (typeof PLATFORMS)[number]

/** Ce que la plaque fait gagner : des avis ou des abonnés. */
export type PlateGoal = 'avis' | 'abonnes' | 'rendez-vous'

/** Slugs = URL des fiches produit, à la racine du site (`/plaque-avis-google`). */
export const PLATE_SLUGS = [
  'plaque-avis-google',
  'plaque-instagram',
  'plaque-tiktok',
  'plaque-avis-tripadvisor',
  'plaque-doctolib',
  'plaque-snapchat',
] as const

export type PlateSlug = (typeof PLATE_SLUGS)[number]

export type Plate = {
  slug: PlateSlug
  platform: Platform
  /** Nom commercial, repris sur Stripe et la facture. */
  name: string
  /** Nom de la plateforme seule, pour les phrases (« votre page Google »). */
  platformLabel: string
  goal: PlateGoal
  /** Prix unitaire en centimes, prix final payé (TVA non applicable, voir `VAT_MENTION`). */
  unitAmount: number
  /** Couleur de marque de la plateforme, utilisée en accent sur la fiche. */
  accent: string
  /** Fond clair aux couleurs de la plateforme, derrière les visuels. */
  tint: string
  /** Libellés de la démo animée (écran du téléphone, notification). */
  demo: { action: string; toast: string; done: string }
  image: string
  imageAlt: string
  /** Une phrase, affichée sur les cartes du catalogue. */
  tagline: string
  /** Paragraphes de la fiche produit. */
  description: string[]
  /** Ce que le client associe à sa plaque. */
  linkTarget: string
  /** Métiers à qui la plaque parle le plus. */
  sectors: string[]
  /** Guide youzoune.com expliquant comment récupérer le lien à associer. */
  guide: GuideSlug
  metaTitle: string
  metaDescription: string
}

/**
 * Prix unitaire commun aux six plaques, validé pour le lancement.
 */
const UNIT_AMOUNT = 2990

export const PLATES: Plate[] = [
  {
    slug: 'plaque-avis-google',
    platform: 'google',
    name: 'Plaque avis Google',
    platformLabel: 'Google',
    goal: 'avis',
    unitAmount: UNIT_AMOUNT,
    accent: '#4285F4',
    tint: '#E8F0FE',
    demo: {
      action: 'Publier l’avis',
      toast: 'Nouvel avis Google ★★★★★',
      done: 'L’avis est publié',
    },
    image: '/plaques/google.webp',
    imageAlt:
      'Plaque Youzplate Google « Laissez-nous un avis » avec zone NFC et QR code sur fond bleu',
    tagline: 'Vos clients satisfaits laissent un avis Google en moins de 30 secondes.',
    description: [
      'Posée sur votre comptoir, votre caisse ou vos tables, la plaque ouvre directement la fenêtre de notation de votre fiche Google Business. Pas de recherche, pas de lien à taper : le client approche son téléphone ou scanne le QR code, les étoiles s’affichent.',
      'Plus d’avis, c’est une meilleure note moyenne, une meilleure place dans le pack local de Google Maps et plus de clients qui vous choisissent avant même d’avoir poussé la porte.',
    ],
    linkTarget: 'le lien d’avis de votre fiche Google Business',
    sectors: ['Restaurants', 'Commerces', 'Salons de coiffure', 'Artisans', 'Hôtels', 'Garages'],
    guide: 'recuperer-lien-google-business',
    metaTitle: 'Plaque avis Google NFC et QR code',
    metaDescription:
      'Plaque NFC et QR code qui ouvre la fenêtre d’avis de votre fiche Google Business. Sans abonnement, lien modifiable à vie, livraison offerte.',
  },
  {
    slug: 'plaque-instagram',
    platform: 'instagram',
    name: 'Plaque Instagram',
    platformLabel: 'Instagram',
    goal: 'abonnes',
    unitAmount: UNIT_AMOUNT,
    accent: '#E4405F',
    tint: '#FDECF3',
    demo: { action: 'S’abonner', toast: 'Nouvel abonné Instagram', done: 'Un abonné de plus' },
    image: '/plaques/instagram.webp',
    imageAlt:
      'Plaque Youzplate Instagram « Rejoignez-nous » avec zone NFC et QR code sur fond dégradé orange et rose',
    tagline: 'Transformez vos clients de passage en abonnés Instagram.',
    description: [
      'Un client qui aime votre boutique est prêt à vous suivre, à condition que ce soit immédiat. La plaque ouvre votre profil Instagram en un geste : il n’a plus qu’à appuyer sur « S’abonner ».',
      'Chaque abonné voit ensuite vos nouveautés, vos promotions et vos coulisses. C’est une audience que vous retrouvez gratuitement à chaque publication.',
    ],
    linkTarget: 'votre nom d’utilisateur Instagram',
    sectors: ['Restaurants', 'Bars', 'Boutiques', 'Instituts de beauté', 'Salles de sport'],
    guide: 'trouver-nom-utilisateur-instagram',
    metaTitle: 'Plaque Instagram NFC et QR code',
    metaDescription:
      'Plaque NFC et QR code qui ouvre votre profil Instagram pour gagner des abonnés en boutique. Sans abonnement, lien modifiable, livraison offerte.',
  },
  {
    slug: 'plaque-tiktok',
    platform: 'tiktok',
    name: 'Plaque TikTok',
    platformLabel: 'TikTok',
    goal: 'abonnes',
    unitAmount: UNIT_AMOUNT,
    accent: '#010101',
    tint: '#ECEDF1',
    demo: { action: 'Suivre', toast: 'Nouvel abonné TikTok', done: 'Un abonné de plus' },
    image: '/plaques/tiktok.webp',
    imageAlt: 'Plaque Youzplate TikTok avec zone NFC et QR code',
    tagline: 'Faites de chaque client un abonné TikTok.',
    description: [
      'Vos vidéos font venir du monde, la plaque fait le chemin inverse : vos clients sur place retrouvent votre compte TikTok en un geste et s’y abonnent avant de repartir.',
      'Un compte qui grossit, c’est plus de portée à chaque vidéo et un algorithme qui vous montre davantage aux gens de votre ville.',
    ],
    linkTarget: 'votre nom d’utilisateur TikTok',
    sectors: ['Restaurants', 'Food trucks', 'Boutiques', 'Barbiers', 'Lieux de loisirs'],
    guide: 'trouver-nom-utilisateur-tiktok',
    metaTitle: 'Plaque TikTok NFC et QR code',
    metaDescription:
      'Plaque NFC et QR code qui ouvre votre compte TikTok pour gagner des abonnés en boutique. Sans abonnement, lien modifiable, livraison offerte.',
  },
  {
    slug: 'plaque-avis-tripadvisor',
    platform: 'tripadvisor',
    name: 'Plaque avis TripAdvisor',
    platformLabel: 'TripAdvisor',
    goal: 'avis',
    unitAmount: UNIT_AMOUNT,
    accent: '#00AF87',
    tint: '#E3F7EF',
    demo: { action: 'Envoyer l’avis', toast: 'Nouvel avis TripAdvisor', done: 'L’avis est envoyé' },
    image: '/plaques/tripadvisor.webp',
    imageAlt: 'Plaque Youzplate TripAdvisor avec zone NFC et QR code',
    tagline: 'Des avis TripAdvisor récoltés à table, pas des semaines plus tard.',
    description: [
      'Les voyageurs choisissent sur TripAdvisor, et ils lisent les avis récents. La plaque ouvre le formulaire d’avis de votre établissement au moment où l’expérience est encore fraîche.',
      'Idéale sur les tables, à la réception ou glissée dans le porte-addition.',
    ],
    linkTarget: 'le lien du formulaire d’avis de votre page TripAdvisor',
    sectors: ['Restaurants', 'Hôtels', 'Chambres d’hôtes', 'Activités touristiques'],
    guide: 'trouver-lien-tripadvisor',
    metaTitle: 'Plaque avis TripAdvisor NFC et QR code',
    metaDescription:
      'Plaque NFC et QR code qui ouvre le formulaire d’avis de votre page TripAdvisor. Sans abonnement, lien modifiable à vie, livraison offerte.',
  },
  {
    slug: 'plaque-doctolib',
    platform: 'doctolib',
    name: 'Plaque Doctolib',
    platformLabel: 'Doctolib',
    goal: 'rendez-vous',
    unitAmount: UNIT_AMOUNT,
    accent: '#107ACA',
    tint: '#E5F2FB',
    demo: { action: 'Prendre RDV', toast: 'Rendez-vous réservé', done: 'Le rendez-vous est pris' },
    image: '/plaques/doctolib.webp',
    imageAlt: 'Plaque Youzplate Doctolib avec zone NFC et QR code',
    tagline: 'Vos patients reprennent rendez-vous sans appeler le cabinet.',
    description: [
      'Posée à l’accueil ou en salle d’attente, la plaque ouvre votre page Doctolib : le patient prend son prochain rendez-vous depuis son téléphone, sans mobiliser le secrétariat.',
      'Moins d’appels, moins d’oublis, et un agenda qui se remplit tout seul.',
    ],
    linkTarget: 'le lien de partage de votre page Doctolib',
    sectors: ['Médecins', 'Kinésithérapeutes', 'Dentistes', 'Ostéopathes', 'Centres de santé'],
    guide: 'trouver-lien-partage-doctolib',
    metaTitle: 'Plaque Doctolib NFC et QR code',
    metaDescription:
      'Plaque NFC et QR code qui ouvre votre page Doctolib pour que vos patients reprennent rendez-vous seuls. Sans abonnement, livraison offerte.',
  },
  {
    slug: 'plaque-snapchat',
    platform: 'snapchat',
    name: 'Plaque Snapchat',
    platformLabel: 'Snapchat',
    goal: 'abonnes',
    unitAmount: UNIT_AMOUNT,
    accent: '#E7C400',
    tint: '#FFFBD1',
    demo: { action: 'Ajouter', toast: 'Nouvel ami Snapchat', done: 'Un ami de plus' },
    image: '/plaques/snapchat.webp',
    imageAlt: 'Plaque Youzplate Snapchat avec zone NFC et QR code sur fond jaune',
    tagline: 'Ajoutez vos clients sur Snapchat en un geste.',
    description: [
      'Snapchat reste le réseau du quotidien pour une large part des moins de 30 ans. La plaque ouvre votre profil pour qu’ils vous ajoutent sur place.',
      'Vos stories deviennent alors un canal direct pour annoncer un arrivage, un événement ou une offre du jour.',
    ],
    linkTarget: 'votre nom d’utilisateur Snapchat',
    sectors: ['Snacks', 'Bars à chicha', 'Boutiques', 'Barbiers', 'Événementiel'],
    guide: 'trouver-nom-utilisateur-snapchat',
    metaTitle: 'Plaque Snapchat NFC et QR code',
    metaDescription:
      'Plaque NFC et QR code qui ouvre votre profil Snapchat pour gagner des abonnés en boutique. Sans abonnement, lien modifiable, livraison offerte.',
  },
]

const PLATES_BY_SLUG = new Map<string, Plate>(PLATES.map((plate) => [plate.slug, plate]))

export function getPlate(slug: string): Plate | undefined {
  return PLATES_BY_SLUG.get(slug)
}

export function isPlateSlug(value: string): value is PlateSlug {
  return PLATES_BY_SLUG.has(value)
}

export function getPlateByPlatform(platform: Platform): Plate {
  return PLATES.find((plate) => plate.platform === platform)!
}

export const GOAL_LABELS: Record<PlateGoal, string> = {
  avis: 'Plus d’avis',
  abonnes: 'Plus d’abonnés',
  'rendez-vous': 'Plus de rendez-vous',
}
