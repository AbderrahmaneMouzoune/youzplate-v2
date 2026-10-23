'use client'

import Link from 'next/link'
import posthog from 'posthog-js'
import { useEffect } from 'react'

export default function ErrorPage({
  error,
  retry,
}: {
  error: Error & { digest?: string }
  retry: () => void
}) {
  useEffect(() => {
    console.error(error)
    // Une erreur avec `digest` vient du serveur : `onRequestError` l'a déjà remontée.
    if (!error.digest) posthog.captureException(error)
  }, [error])

  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <p className="text-sm font-semibold text-brand-600">Erreur</p>
      <h1 className="mt-2 text-3xl font-extrabold tracking-tight">Un souci est survenu</h1>
      <p className="mt-3 text-muted">
        La page n’a pas pu s’afficher. Réessayez : votre panier est conservé.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <button
          type="button"
          onClick={() => retry()}
          className="rounded-full bg-brand-600 px-6 py-3 font-semibold text-white"
        >
          Réessayer
        </button>
        <Link href="/" className="rounded-full border border-line px-6 py-3 font-semibold">
          Retour à l’accueil
        </Link>
      </div>
    </div>
  )
}
