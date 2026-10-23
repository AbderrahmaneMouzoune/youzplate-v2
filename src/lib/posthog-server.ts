import 'server-only'

import { PostHog } from 'posthog-node'

let posthogClient: PostHog | null = null

/**
 * Client PostHog serveur partagé, ou `null` tant que le token n'est pas
 * renseigné : la mesure ne doit jamais empêcher une commande d'aboutir.
 */
export function getPostHogClient(): PostHog | null {
  const token = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN
  if (!token) {
    if (process.env.NODE_ENV === 'development') {
      console.error(
        'NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN variable required by PostHog is missing or un-configured, ' +
          'this causes events to be silently missed. ' +
          'This error stops appearing once NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN is configured'
      )
    }
    return null
  }
  posthogClient ??= new PostHog(token, {
    host: process.env.NEXT_PUBLIC_POSTHOG_HOST ?? 'https://eu.i.posthog.com',
    flushAt: 1,
    flushInterval: 0,
    enableExceptionAutocapture: true,
  })
  return posthogClient
}

type ServerEvent = Parameters<PostHog['captureImmediate']>[0]

/**
 * Capture un événement et attend son envoi HTTP : sur une fonction serverless,
 * un événement laissé en file peut être perdu quand l'instance est gelée après
 * la réponse. Ne lève jamais.
 */
export async function captureServerEvent(event: ServerEvent): Promise<void> {
  try {
    await getPostHogClient()?.captureImmediate(event)
  } catch (error) {
    console.error('PostHog capture error:', error)
  }
}

/** Remonte une erreur dans l'Error tracking de PostHog, en attendant l'envoi. Ne lève jamais. */
export async function captureServerException(
  error: unknown,
  distinctId?: string,
  properties?: Record<string, unknown>
): Promise<void> {
  try {
    await getPostHogClient()?.captureExceptionImmediate(error, distinctId, properties)
  } catch (captureError) {
    console.error('PostHog exception capture error:', captureError)
  }
}
