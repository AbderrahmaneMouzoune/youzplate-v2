import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <p className="text-sm font-semibold text-brand-600">Erreur 404</p>
      <h1 className="mt-2 text-3xl font-extrabold tracking-tight">Cette page n’existe pas</h1>
      <p className="mt-3 text-muted">
        Le lien est peut-être ancien. Nos plaques, elles, sont bien là.
      </p>
      <Link
        href="/plaques"
        className="mt-8 inline-block rounded-full bg-brand-600 px-6 py-3 font-semibold text-white"
      >
        Voir les plaques
      </Link>
    </div>
  )
}
