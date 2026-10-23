'use client'

import Link from 'next/link'
import posthog from 'posthog-js'
import { useEffect, useState } from 'react'

/** Rouvre le bandeau depuis n'importe où (pied de page, politique de confidentialité). */
export const OPEN_COOKIE_PREFERENCES_EVENT = 'youzplate:open-cookie-preferences'

/**
 * Bandeau de consentement à la mesure d'audience, repris de la vitrine.
 *
 * PostHog démarre en opt-out et en mode sans cookie (`instrumentation-client.ts`) :
 * rien n'est déposé sur l'appareil avant un choix explicite, et refuser garde
 * une mesure anonyme, sans identifiant conservé ni enregistrement de session.
 * Seul le choix lui-même est mémorisé, ce qui est exempté de consentement.
 */
export function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const show = () => setVisible(true)
    // `pending` uniquement si le visiteur n'a jamais tranché.
    if (posthog.__loaded && posthog.get_explicit_consent_status() === 'pending') show()
    window.addEventListener(OPEN_COOKIE_PREFERENCES_EVENT, show)
    return () => window.removeEventListener(OPEN_COOKIE_PREFERENCES_EVENT, show)
  }, [])

  const decide = (accepted: boolean) => {
    if (accepted) posthog.opt_in_capturing()
    else posthog.opt_out_capturing()
    // Envoyé après le choix : avec cookie si accepté, sans cookie sinon.
    posthog.capture('cookie_consent_decided', { accepted })
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-consent-title"
      className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-xl rounded-3xl bg-white p-5 shadow-[0_24px_48px_rgba(20,22,46,0.18)] ring-1 ring-line sm:bottom-5"
    >
      <p id="cookie-consent-title" className="font-display text-lg font-extrabold">
        Cookies de mesure d’audience
      </p>
      <p className="mt-1.5 text-sm text-muted">
        On aimerait comprendre comment le site est utilisé pour l’améliorer. Si vous acceptez, un
        cookie de mesure d’audience est déposé. Si vous refusez, la mesure reste anonyme et aucun
        cookie n’est posé. Détails dans notre{' '}
        <Link href="/confidentialite" className="font-semibold text-brand-600 underline">
          politique de confidentialité
        </Link>
        .
      </p>
      <div className="mt-4 flex gap-2.5">
        <button
          type="button"
          onClick={() => decide(true)}
          className="min-h-11 flex-1 rounded-full bg-brand-600 px-5 font-bold text-white transition hover:bg-brand-700"
        >
          Accepter
        </button>
        <button
          type="button"
          onClick={() => decide(false)}
          className="min-h-11 flex-1 rounded-full border-2 border-ink px-5 font-bold"
        >
          Refuser
        </button>
      </div>
    </div>
  )
}

/** Bouton « Gérer les cookies » : le retrait du consentement doit être aussi simple que son recueil. */
export function CookiePreferencesButton({ className }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_COOKIE_PREFERENCES_EVENT))}
      className={className}
    >
      Gérer les cookies
    </button>
  )
}
