import Link from 'next/link'

import { getPlate } from '@/config/catalog'
import { formatPrice } from '@/lib/format'
import { discountedUnitAmount, formatRate, VOLUME_TIERS } from '@/lib/pricing'

const UNIT = getPlate('plaque-avis-google')!.unitAmount

const PACKS = [
  {
    name: 'Essentiel',
    quantity: 1,
    text: '1 plaque, la plateforme de votre choix.',
    points: ['NFC + QR code', 'Lien modifiable à vie', 'Livraison offerte'],
    href: '/plaque-avis-google#acheter',
    cta: 'Choisir ma plaque',
  },
  {
    name: 'Duo Avis + Réseaux',
    quantity: 2,
    text: 'Google + Instagram, ou toute autre paire.',
    points: ['Des avis et des abonnés', 'Panachage libre', 'Livraison offerte'],
    href: '/plaque-avis-google-instagram',
    cta: 'Composer mon duo',
    featured: true,
  },
  {
    name: 'Établissement',
    quantity: 5,
    text: '5 plaques à répartir comme vous voulez.',
    points: ['Comptoir, tables, vitrine', 'Panachage libre', 'Facture avec TVA'],
    href: '/plaque-avis-google#acheter',
    cta: 'Équiper mon établissement',
  },
]

/** Les trois paliers de prix, calculés depuis `pricing.ts`. */
export function Packs() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {PACKS.map((pack) => {
        const price = discountedUnitAmount(UNIT, pack.quantity) * pack.quantity
        const full = UNIT * pack.quantity
        const tier = VOLUME_TIERS.find((t) => pack.quantity >= t.minQuantity)
        return (
          <div
            key={pack.name}
            className={`relative flex flex-col gap-4 rounded-[28px] p-8 ${
              pack.featured
                ? 'bg-ink text-white shadow-2xl shadow-brand-900/25'
                : 'border border-line bg-white'
            }`}
          >
            {pack.featured && (
              <span className="absolute -top-3.5 left-8 rounded-full bg-star px-3.5 py-1.5 text-[13px] font-extrabold text-ink">
                Le plus choisi
              </span>
            )}
            <h3 className="font-display text-2xl font-extrabold">{pack.name}</h3>
            <p className={pack.featured ? 'text-brand-200' : 'text-muted'}>{pack.text}</p>
            <p className="flex items-baseline gap-3">
              <span className="font-display text-[44px] font-extrabold">{formatPrice(price)}</span>
              {tier && (
                <span className={`line-through ${pack.featured ? 'text-brand-200' : 'text-muted'}`}>
                  {formatPrice(full)}
                </span>
              )}
            </p>
            <ul className="list-disc space-y-1.5 pl-5">
              {tier && <li>{`${pack.quantity} plaques, ${formatRate(tier.rate)}`}</li>}
              {pack.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <Link
              href={pack.href}
              className={`mt-auto flex min-h-13 items-center justify-center rounded-full font-extrabold transition ${
                pack.featured
                  ? 'bg-star text-ink hover:brightness-95'
                  : 'border-2 border-ink hover:bg-ink hover:text-white'
              }`}
            >
              {pack.cta}
            </Link>
          </div>
        )
      })}
    </div>
  )
}
