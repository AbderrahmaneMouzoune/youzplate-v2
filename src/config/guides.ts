import { YOUZOUNE_URL } from '@/config/site'

/**
 * Guides publiés sur le blog de la vitrine youzoune.com.
 *
 * La boutique ne duplique pas ce contenu : elle y renvoie. Chaque plaque pointe
 * vers le guide qui explique comment récupérer le lien à y associer, et la page
 * `/guides` les rassemble. Les slugs doivent exister dans
 * `youzoune-vitrine/src/data/articles.ts`, sinon le lien tombe sur l'archive du blog.
 */
export const GUIDES = {
  'recuperer-lien-google-business': {
    title: 'Lien Google Business : le récupérer et s’en servir pour collecter des avis',
    excerpt:
      'Le lien de votre fiche et le lien d’avis sont deux URL différentes. Voici comment obtenir celui qui ouvre directement la fenêtre de notation.',
  },
  'trouver-lien-tripadvisor': {
    title: 'Trouver le lien de sa page Tripadvisor et celui qui ouvre le formulaire d’avis',
    excerpt:
      'Où trouver l’URL de votre page, obtenir le lien du formulaire d’avis et le nettoyer avant de le partager.',
  },
  'trouver-lien-partage-doctolib': {
    title: 'Trouver son lien Doctolib et le partager à ses patients',
    excerpt:
      'La différence entre lien de profil et lien de rendez-vous, et où le placer pour réduire les appels au cabinet.',
  },
  'trouver-nom-utilisateur-instagram': {
    title: 'Nom d’utilisateur Instagram : le trouver, le comprendre, bien le choisir',
    excerpt:
      'Où lire votre nom d’utilisateur, en quoi il diffère du nom affiché et ce que change sa modification.',
  },
  'trouver-nom-utilisateur-tiktok': {
    title: 'Nom d’utilisateur TikTok : où le trouver et quand il peut être modifié',
    excerpt:
      'Le distinguer du pseudo affiché, le délai de trente jours entre deux changements, et comment partager son profil.',
  },
  'trouver-nom-utilisateur-snapchat': {
    title: 'Nom d’utilisateur Snapchat : le trouver et comprendre pourquoi il ne change pas',
    excerpt:
      'Où le lire, en quoi il diffère du nom affiché et pourquoi il n’est modifiable qu’une fois par an.',
  },
  'augmentez-satisfaction-client-nps': {
    title: 'NPS : mesurer la satisfaction client sans monter une usine à gaz',
    excerpt:
      'Mesurer la satisfaction avant de solliciter un avis : calcul, timing de la question et usage des réponses.',
  },
  'seo-local-visibilite-entreprise': {
    title: 'SEO local : se rendre visible auprès des clients de son secteur',
    excerpt:
      'Ce qui décide de votre place dans le pack local, et pourquoi le volume d’avis y pèse autant.',
  },
} as const

export type GuideSlug = keyof typeof GUIDES

export function guideUrl(slug: GuideSlug): string {
  return `${YOUZOUNE_URL}/blog/${slug}`
}

/** Guides généraux, affichés après les guides par plateforme. */
export const GENERAL_GUIDES: GuideSlug[] = [
  'seo-local-visibilite-entreprise',
  'augmentez-satisfaction-client-nps',
]
