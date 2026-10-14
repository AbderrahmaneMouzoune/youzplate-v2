import { GuideCard } from '@/components/guide-card'
import { PLATES } from '@/config/catalog'
import { GENERAL_GUIDES } from '@/config/guides'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Guides : trouver le lien à associer à votre plaque',
  description:
    'Lien d’avis Google, page TripAdvisor, lien Doctolib, nom d’utilisateur Instagram, TikTok ou Snapchat : où trouver le lien à associer à votre plaque Youzplate.',
  alternates: { canonical: '/guides' },
}

export default function GuidesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <header className="mb-10 max-w-2xl">
        <h1 className="text-4xl font-extrabold tracking-tight">Guides de configuration</h1>
        <p className="mt-3 text-lg text-muted">
          Chaque plateforme a son lien, et ce n’est pas toujours celui qu’on croit. Ces guides,
          publiés sur le blog Youzoune, vous montrent où trouver le bon, étape par étape.
        </p>
      </header>

      <h2 className="mb-5 text-xl font-bold">Par plateforme</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PLATES.map((plate) => (
          <GuideCard key={plate.slug} slug={plate.guide} eyebrow={plate.platformLabel} />
        ))}
      </div>

      <h2 className="mt-14 mb-5 text-xl font-bold">Pour aller plus loin</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {GENERAL_GUIDES.map((slug) => (
          <GuideCard key={slug} slug={slug} />
        ))}
      </div>
    </div>
  )
}
