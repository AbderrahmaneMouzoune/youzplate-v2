import { PlateCard } from '@/components/plate-card'
import { PLATES } from '@/config/catalog'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Toutes les plaques NFC et QR code',
  description:
    'Plaques avis Google, TripAdvisor, Doctolib et plaques Instagram, TikTok, Snapchat. NFC et QR code, sans abonnement, livraison offerte.',
  alternates: { canonical: '/plaques' },
}

export default function PlatesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <header className="mb-10 max-w-2xl">
        <h1 className="text-4xl font-extrabold tracking-tight">Les plaques Youzplate</h1>
        <p className="mt-3 text-lg text-muted">
          Chaque plaque combine une puce NFC et un QR code, et ouvre directement votre page.
          Choisissez la plateforme sur laquelle vous voulez grandir.
        </p>
      </header>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PLATES.map((plate, index) => (
          <PlateCard key={plate.slug} plate={plate} priority={index < 3} />
        ))}
      </div>
    </div>
  )
}
