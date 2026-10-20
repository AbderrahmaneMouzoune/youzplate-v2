import type { Platform } from '@/config/catalog'
import type { FaqItem } from '@/config/faq'

/** Familles de métiers, pour regrouper les pages sur le hub `/metiers`. */
export type MetierFamily =
  'restauration' | 'hebergement' | 'beaute' | 'commerce' | 'auto' | 'services' | 'sante'

/**
 * Une page métier : `/<plaque>/<slug>`, par exemple `/plaque-avis-google/restaurant`.
 *
 * Chaque page porte un contenu propre au métier (emplacements, moment, phrase,
 * FAQ) : c'est ce qui la distingue d'une page dupliquée aux yeux de Google.
 * Aucun chiffre inventé : pas de statistique, pas de témoignage.
 */
export type Metier = {
  /** Segment d'URL, en minuscules sans accents : `institut-de-beaute`. */
  slug: string
  /** Plaque principale de la page : `google` (avis) ou `doctolib` (rendez-vous). */
  platform: Extract<Platform, 'google' | 'doctolib'>
  family: MetierFamily
  /** Nom court, pour les listes et le fil d'Ariane : « Restaurant ». */
  name: string
  /** H1 exact, mot-clé en tête : « Plaque avis Google pour restaurant ». */
  h1: string
  /** Complément de lieu : « dans votre restaurant », « dans votre cabinet ». */
  where: string
  /** 50 à 60 caractères, sans le suffixe « | Youzplate » ajouté automatiquement. */
  metaTitle: string
  /** 140 à 160 caractères. */
  metaDescription: string
  /** Réponse directe en 2 ou 3 phrases (cible de l'extrait en vedette). */
  intro: string
  /** Trois emplacements concrets dans le lieu, du plus au moins efficace. */
  spots: { title: string; text: string }[]
  /** Le meilleur moment pour solliciter le client ou le patient, et pourquoi. */
  moment: string
  /** Une phrase naturelle que le professionnel peut dire, sans guillemets. */
  script: string
  /** Plaques complémentaires recommandées (hors plaque principale), 0 à 2. */
  alsoRecommended: Platform[]
  /** Trois questions propres au métier, réponses de 1 à 3 phrases. */
  faq: FaqItem[]
}
