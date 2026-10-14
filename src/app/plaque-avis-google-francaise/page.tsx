import Link from 'next/link'

import { FaqList } from '@/components/faq-list'
import { JsonLd } from '@/components/json-ld'
import { PlateVisual } from '@/components/plate-visual'
import { Breadcrumbs } from '@/components/sections'
import { getPlate } from '@/config/catalog'
import { SHIPPING, SITE } from '@/config/site'
import { formatPrice } from '@/lib/format'

import type { Metadata } from 'next'

const UPDATED = '2026-10-14'

export const metadata: Metadata = {
  title: 'Plaque avis Google française ou AliExpress / Temu ?',
  description:
    'Plaque NFC avis Google achetée en France ou sur AliExpress, Temu, Amazon : les 5 questions à poser avant d’acheter et un comparatif honnête, critère par critère.',
  alternates: { canonical: '/plaque-avis-google-francaise' },
}

const plate = getPlate('plaque-avis-google')!

const QUESTIONS = [
  [
    'Le lien est-il gravé dans la puce ou redirigé ?',
    'Gravé : pour le changer, il faut réécrire la puce avec une application, à condition qu’elle ne soit pas verrouillée. Redirigé : on change la destination à distance, la plaque ne bouge pas.',
  ],
  [
    'Y a-t-il un abonnement caché ?',
    'Certaines plaques redirigées cessent de fonctionner quand l’abonnement s’arrête. Lisez les conditions avant de payer.',
  ],
  [
    'Quel délai de livraison réel ?',
    'Comparez la date de livraison annoncée au moment du paiement, pas seulement le prix.',
  ],
  [
    'Qui vous aide à configurer la plaque ?',
    'Trouver le bon lien d’avis n’a rien d’évident. Un vendeur qui répond en français vous fait gagner du temps.',
  ],
  [
    'Recevez-vous une facture avec TVA ?',
    'Indispensable pour passer l’achat dans les charges de votre entreprise.',
  ],
]

const TABLE = [
  [
    'Prix',
    `${formatPrice(plate.unitAmount)} TTC, une fois`,
    'Souvent plus bas, variable',
    'Mensualité',
  ],
  [
    'Lien modifiable',
    'Oui, gratuit, à distance',
    'Selon le vendeur et la puce',
    'Oui, tant que vous payez',
  ],
  [
    'Si vous arrêtez de payer',
    'Elle continue de fonctionner',
    'Sans objet',
    'Elle peut cesser de fonctionner',
  ],
  [
    'Livraison',
    `${SHIPPING.minBusinessDays} à ${SHIPPING.maxBusinessDays} jours ouvrés, offerte`,
    'Variable selon l’entrepôt',
    'Selon l’offre',
  ],
  ['Aide à la configuration', 'Guides + support en français', 'Variable', 'Selon l’offre'],
  ['Facture avec TVA', 'Oui', 'Variable', 'Oui'],
]

const FAQ = [
  {
    question: 'Une plaque NFC vendue quelques euros fonctionne-t-elle ?',
    answer:
      'Techniquement oui, si la puce est bien encodée. La différence se joue sur la possibilité de changer le lien, la finition, le délai et l’accompagnement.',
  },
  {
    question: 'Puis-je programmer moi-même une plaque NFC vierge ?',
    answer:
      'Oui, avec une application d’écriture NFC. Ne verrouillez pas la puce si vous voulez pouvoir la modifier, et ajoutez un QR code pour les téléphones sans NFC.',
  },
  {
    question: 'Que se passe-t-il si je change de fiche Google ?',
    answer:
      'Avec une plaque redirigée comme Youzplate, on change la destination à distance. Avec un lien gravé dans la puce, il faut la réécrire, et réimprimer le QR code.',
  },
]

export default function ComparisonPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: plate.name, href: `/${plate.slug}` },
          { name: 'Française ou importée ?', href: '/plaque-avis-google-francaise' },
        ]}
      />
      <article className="mx-auto max-w-3xl space-y-8 px-4 pt-6 pb-20">
        <header className="space-y-4">
          <p className="text-sm text-muted">
            Mis à jour le{' '}
            <time dateTime={UPDATED}>
              {new Date(UPDATED).toLocaleDateString('fr-FR', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </time>
          </p>
          <h1 className="font-display text-[clamp(32px,5vw,50px)] leading-[1.06] font-extrabold tracking-tight">
            Plaque avis Google française ou importée : le comparatif honnête
          </h1>
        </header>

        <div className="space-y-2.5 rounded-3xl bg-brand-50 p-7">
          <p className="text-sm font-bold tracking-[0.12em] text-brand-600 uppercase">En bref</p>
          <p className="text-lg leading-relaxed">
            Une plaque importée coûte souvent moins cher à l’achat. La vraie question est ailleurs :{' '}
            <strong>pouvez-vous changer le lien sans racheter la plaque</strong>, en combien de
            temps est-elle livrée, et qui vous répond en cas de problème. Vérifiez ces trois points
            avant de comparer les prix.
          </p>
        </div>

        <h2 className="pt-4 font-display text-3xl font-extrabold">
          Les 5 questions à poser avant d’acheter
        </h2>
        <ol className="space-y-3.5">
          {QUESTIONS.map(([title, text], index) => (
            <li key={title} className="flex gap-4 rounded-3xl border border-line p-6">
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-star font-extrabold">
                {index + 1}
              </span>
              <span className="space-y-1.5">
                <strong className="block text-lg">{title}</strong>
                <span className="block leading-relaxed text-muted">{text}</span>
              </span>
            </li>
          ))}
        </ol>

        <h2 className="pt-4 font-display text-3xl font-extrabold">Le tableau comparatif</h2>
        <div className="overflow-x-auto rounded-3xl border border-line">
          <table className="w-full min-w-[640px] border-collapse text-[15px]">
            <thead className="bg-paper">
              <tr>
                <th scope="col" className="p-4 text-left" />
                <th scope="col" className="p-4 text-brand-600">
                  Youzplate
                </th>
                <th scope="col" className="p-4">
                  Marketplaces (AliExpress, Temu…)
                </th>
                <th scope="col" className="p-4">
                  Plaques sur abonnement
                </th>
              </tr>
            </thead>
            <tbody>
              {TABLE.map(([label, ours, market, subscription]) => (
                <tr key={label} className="border-t border-line">
                  <th scope="row" className="p-4 text-left font-semibold">
                    {label}
                  </th>
                  <td className="p-4 text-center font-bold">{ours}</td>
                  <td className="p-4 text-center text-muted">{market}</td>
                  <td className="p-4 text-center text-muted">{subscription}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <aside className="flex flex-wrap items-center gap-6 rounded-[28px] bg-ink p-7 text-white">
          <PlateVisual plate={plate} size={140} decorative />
          <div className="min-w-0 flex-[1_1_260px] space-y-2">
            <p className="font-display text-2xl font-extrabold">La plaque avis Google Youzplate</p>
            <p className="text-brand-200">
              Lien modifiable à vie, sans abonnement, livrée en {SHIPPING.minBusinessDays} à{' '}
              {SHIPPING.maxBusinessDays} jours avec une facture française.
            </p>
          </div>
          <Link
            href={`/${plate.slug}`}
            className="inline-flex min-h-13 items-center rounded-full bg-star px-6 font-extrabold text-ink"
          >
            Voir la plaque · {formatPrice(plate.unitAmount)}
          </Link>
        </aside>

        <h2 className="pt-4 font-display text-3xl font-extrabold">Questions fréquentes</h2>
        <FaqList items={FAQ} />

        <nav aria-label="À lire aussi" className="flex flex-wrap gap-2.5 border-t border-line pt-6">
          {[
            ['/qr-code-avis-google', 'QR code avis Google gratuit'],
            ['/plaque-avis-google/restaurant', 'Plaque avis Google pour restaurant'],
            ['/plaque-avis-google-instagram', 'Pack Google + Instagram'],
          ].map(([href, label]) => (
            <Link
              key={href}
              href={href}
              className="inline-flex min-h-11 items-center rounded-full border border-[#D3D5E6] px-4 font-medium hover:border-brand-500"
            >
              {label}
            </Link>
          ))}
        </nav>
      </article>

      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'Plaque avis Google française ou importée : le comparatif honnête',
          dateModified: UPDATED,
          author: { '@type': 'Organization', name: SITE.name },
          publisher: { '@type': 'Organization', name: SITE.name },
          mainEntityOfPage: `${SITE.url}/plaque-avis-google-francaise`,
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: FAQ.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: { '@type': 'Answer', text: item.answer },
          })),
        }}
      />
    </>
  )
}
