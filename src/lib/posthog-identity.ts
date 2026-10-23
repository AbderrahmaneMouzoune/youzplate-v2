/**
 * Rattachement des événements serveur au visiteur qui les a déclenchés.
 *
 * Le formulaire du panier transmet l'identifiant PostHog du navigateur dans
 * des champs cachés ; l'action serveur le recopie dans les métadonnées de la
 * session Stripe, et le webhook le relit pour attribuer `order_completed` au
 * même visiteur que `product_added_to_cart` et `checkout_started`.
 *
 * Module sans dépendance au SDK pour être importable des deux côtés.
 */

export const POSTHOG_DISTINCT_ID_FIELD = 'posthog_distinct_id'
export const POSTHOG_SESSION_ID_FIELD = 'posthog_session_id'

/**
 * Identifiant que posthog-js expose en mode sans cookie (visiteur qui n'a pas
 * accepté le bandeau) : PostHog reconstitue alors l'identité à l'ingestion à
 * partir d'un haché, qu'un événement serveur ne peut pas reproduire.
 */
export const POSTHOG_COOKIELESS_DISTINCT_ID = '$posthog_cookieless'

/** Borne les valeurs acceptées : elles viennent du navigateur, donc du visiteur. */
const MAX_ID_LENGTH = 200

export type ServerIdentity = {
  distinctId: string
  /** Vrai quand le visiteur n'a pas d'identifiant durable (refus ou formulaire hors navigateur). */
  anonymous: boolean
  properties: Record<string, string | boolean>
}

function readId(value: unknown): string | null {
  if (typeof value !== 'string') return null
  const id = value.trim()
  if (!id || id.length > MAX_ID_LENGTH) return null
  return id
}

export function resolveServerIdentity(
  distinctId: unknown,
  sessionId: unknown,
  createId: () => string = () => crypto.randomUUID()
): ServerIdentity {
  const id = readId(distinctId)
  const session = readId(sessionId)

  if (id && id !== POSTHOG_COOKIELESS_DISTINCT_ID) {
    return {
      distinctId: id,
      anonymous: false,
      properties: session ? { $session_id: session } : {},
    }
  }

  // Visiteur sans cookie : un identifiant jetable relie les événements serveur
  // d'une même commande entre eux, sans créer de profil de personne.
  return {
    distinctId: createId(),
    anonymous: true,
    properties: { $process_person_profile: false },
  }
}
