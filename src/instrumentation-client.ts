import posthog from 'posthog-js'

/**
 * Initialisation de PostHog côté navigateur, chargée par Next avant
 * l'hydratation. Même configuration que la vitrine Youzoune.
 */
const token = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN

if (!token) {
  if (process.env.NODE_ENV === 'development') {
    console.error(
      'NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN variable required by PostHog is missing or un-configured, ' +
        'this causes events to be silently missed. ' +
        'This error stops appearing once NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN is configured'
    )
  }
} else {
  posthog.init(token, {
    // Proxy déclaré dans `next.config.ts` : les bloqueurs de publicité
    // laissent passer les appels vers notre propre domaine.
    api_host: '/ingest',
    ui_host: 'https://eu.posthog.com',
    defaults: '2026-08-30',
    capture_exceptions: true,
    debug: process.env.NODE_ENV === 'development',
    // --- Consentement (voir `src/components/cookie-consent.tsx`) ---
    // Tant que le visiteur n'a pas accepté, ou s'il refuse, la mesure se fait
    // en mode sans cookie : rien n'est écrit sur l'appareil, PostHog
    // reconstitue la visite côté serveur à partir d'un haché non réversible.
    // Le cookie, l'identifiant durable et l'enregistrement de session
    // n'arrivent qu'après un « Accepter ».
    //
    // ⚠️ Le mode sans cookie doit aussi être activé dans les réglages du projet
    // PostHog, sans quoi ces événements sont ignorés à l'ingestion.
    opt_out_capturing_by_default: true,
    cookieless_mode: 'on_reject',
  })
}

// IMPORTANT: Never combine this approach with other client-side PostHog initialization approaches,
// especially components like a PostHogProvider. instrumentation-client.ts is the correct solution
// for initializing client-side PostHog in Next.js 15.3+ apps.
