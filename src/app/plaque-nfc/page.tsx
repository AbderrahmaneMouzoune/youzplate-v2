import Link from 'next/link'

import { Packs } from '@/components/packs'
import { PlateCard } from '@/components/plate-card'
import { Breadcrumbs, CheckList, PROMISES, SectionHeading } from '@/components/sections'
import { PLATES } from '@/config/catalog'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Plaques NFC et QR code pour avis et réseaux sociaux',
  description:
    'Plaques NFC + QR code pour avis Google, TripAdvisor, Doctolib, Instagram, TikTok et Snapchat. Sans abonnement, lien modifiable à vie, dès 29,90 €, livraison offerte.',
  alternates: { canonical: '/plaque-nfc' },
}

export default function CategoryPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Les plaques', href: '/plaque-nfc' }]} />
      <div className="mx-auto max-w-6xl px-4 py-12">
        <header className="mb-10 max-w-3xl space-y-4">
          <h1 className="font-display text-[clamp(34px,5vw,52px)] leading-[1.05] font-extrabold tracking-tight">
            Plaques NFC et QR code
          </h1>
          <p className="text-lg text-muted">
            Une plaque NFC + QR code ouvre directement votre page quand un client approche son
            téléphone ou scanne le code : fenêtre d’avis Google ou TripAdvisor, profil Instagram,
            TikTok, Snapchat, ou prise de rendez-vous Doctolib. Un seul paiement, scans illimités.
          </p>
          <CheckList items={PROMISES} />
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PLATES.map((plate, index) => (
            <PlateCard key={plate.slug} plate={plate} priority={index < 3} />
          ))}
        </div>
      </div>

      <section id="packs" className="mx-auto max-w-6xl scroll-mt-28 px-4 py-16">
        <SectionHeading
          eyebrow="Packs"
          title="Plus de plaques, moins cher"
          text="La remise s’applique automatiquement au panier, toutes plateformes confondues."
        />
        <Packs />
      </section>

      <section className="mx-auto max-w-3xl space-y-4 px-4 py-12 text-muted">
        <h2 className="font-display text-2xl font-extrabold text-ink">
          NFC ou QR code : pourquoi les deux ?
        </h2>
        <p>
          Le NFC est le plus rapide : le client approche son téléphone, la page s’ouvre. Il
          fonctionne sur tous les iPhone depuis le XS et sur la quasi-totalité des Android. Le QR
          code couvre tous les autres cas : il se lit avec l’appareil photo de n’importe quel
          smartphone.
        </p>
        <p>
          Les deux mènent au même lien, que vous pouvez changer à tout moment. Vous hésitez encore ?{' '}
          <Link href="/qr-code-avis-google" className="font-semibold text-brand-600 underline">
            Créez d’abord un QR code avis Google gratuit
          </Link>{' '}
          ou trouvez{' '}
          <Link href="/metiers" className="font-semibold text-brand-600 underline">
            la plaque adaptée à votre métier
          </Link>
          .
        </p>
      </section>
    </>
  )
}
