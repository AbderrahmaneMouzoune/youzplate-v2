import type { Instrumentation } from 'next'

/**
 * Remonte dans l'Error tracking de PostHog les erreurs serveur (rendu, routes,
 * actions) que Next intercepte. Le SDK n'est chargé que sur le runtime Node.
 */
export const onRequestError: Instrumentation.onRequestError = async (error, request, context) => {
  if (process.env.NEXT_RUNTIME !== 'nodejs') return

  const { captureServerException } = await import('@/lib/posthog-server')
  await captureServerException(error, undefined, {
    path: request.path.split('?')[0],
    method: request.method,
    route_path: context.routePath,
    route_type: context.routeType,
  })
}
