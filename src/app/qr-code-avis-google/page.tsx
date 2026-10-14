import Link from 'next/link'

import { FaqList } from '@/components/faq-list'
import { GuideCard } from '@/components/guide-card'
import { JsonLd } from '@/components/json-ld'
import { PlateVisual } from '@/components/plate-visual'
import { QrGenerator } from '@/components/qr-generator'
import { Breadcrumbs } from '@/components/sections'
import { getPlate } from '@/config/catalog'
import { SITE } from '@/config/site'
import { formatPrice } from '@/lib/format'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'QR code avis Google gratuit : générateur en 30 secondes',
  description:
    'Créez gratuitement le QR code qui ouvre la fenêtre d’avis de votre fiche Google. Sans inscription, téléchargement PNG, SVG ou affiche A5 à imprimer.',
  alternates: { canonical: '/qr-code-avis-google' },
}

const plate = getPlate('plaque-avis-google')!

const FAQ = [
  {
    question: 'Le QR code est-il vraiment gratuit ?',
    answer:
      'Oui, sans inscription ni filigrane. Il est généré dans votre navigateur et pointe directement vers votre lien Google : il ne passe pas par nos serveurs et n’expire jamais.',
  },
  {
    question: 'Où trouver le lien d’avis de ma fiche Google ?',
    answer:
      'Depuis la Recherche Google, connecté au compte qui gère votre fiche : bouton « Demander des avis ». Le lien commence par g.page/r/.',
  },
  {
    question: 'Puis-je l’imprimer sur mes tickets ou cartes de visite ?',
    answer:
      'Oui : le format SVG reste net à toutes les tailles, et l’affiche A5 est prête à poser au comptoir.',
  },
  {
    question: 'Que se passe-t-il si mon lien change ?',
    answer:
      'Un QR code gratuit contient le lien en dur : il faut le régénérer et le réimprimer. Une plaque Youzplate, elle, se redirige à distance sans être remplacée.',
  },
]

const COMPARISON = [
  ['Prix', 'Gratuit (+ impression)', `${formatPrice(plate.unitAmount)}, une fois`],
  ['Geste du client', 'Ouvrir l’appareil photo, viser', 'Approcher le téléphone, ou scanner'],
  ['Changer de lien', 'Régénérer et réimprimer', 'Gratuit, sans changer de plaque'],
  ['Rendu en boutique', 'Feuille ou autocollant', 'Plaque finie aux couleurs de Google'],
]

export default function QrToolPage() {
  return (
    <>
      <Breadcrumbs
        items={[{ name: 'QR code avis Google gratuit', href: '/qr-code-avis-google' }]}
      />

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl space-y-8 px-4 py-12">
          <div className="max-w-3xl space-y-4">
            <p className="inline-flex rounded-full bg-green-50 px-3.5 py-1.5 text-sm font-bold text-[#0B5C3C]">
              Gratuit · sans inscription
            </p>
            <h1 className="font-display text-[clamp(34px,5vw,56px)] leading-[1.04] font-extrabold tracking-tight">
              Créez votre QR code avis Google gratuit
            </h1>
            <p className="text-lg text-[#33364F]">
              Collez le lien d’avis de votre fiche Google : vous obtenez un QR code qui ouvre
              directement la fenêtre de notation. Prêt à imprimer en 30 secondes.
            </p>
          </div>

          <QrGenerator />

          <div className="flex flex-wrap items-center gap-7 rounded-[28px] bg-ink p-7 text-white sm:p-8">
            <PlateVisual plate={plate} size={140} decorative className="-rotate-3" />
            <div className="min-w-0 flex-[1_1_320px] space-y-2">
              <p className="font-display text-[28px] leading-tight font-extrabold">
                Un QR code se scanne. Une plaque se touche.
              </p>
              <p className="text-brand-200">
                Même lien, en version plaque NFC + QR code : vos clients n’ont même plus besoin
                d’ouvrir l’appareil photo. Lien modifiable à vie, sans abonnement.
              </p>
            </div>
            <Link
              href={`/${plate.slug}`}
              className="inline-flex min-h-14 items-center rounded-full bg-star px-6 font-extrabold text-ink"
            >
              Passer à la plaque · {formatPrice(plate.unitAmount)}
            </Link>
          </div>
        </div>
      </section>

      <section id="recuperer-le-lien" className="mx-auto max-w-6xl scroll-mt-28 px-4 py-20">
        <h2 className="mb-8 font-display text-[clamp(28px,3.5vw,40px)] font-extrabold tracking-tight">
          Comment obtenir votre lien d’avis Google
        </h2>
        <ol className="grid gap-5 md:grid-cols-3">
          {[
            [
              'Cherchez votre établissement sur Google',
              'Connecté au compte qui gère la fiche, votre profil d’établissement s’affiche en haut des résultats.',
            ],
            [
              'Cliquez sur « Demander des avis »',
              'Google vous donne un lien court de la forme g.page/r/…/review.',
            ],
            [
              'Collez-le dans l’outil ci-dessus',
              'Le QR code ouvre directement la fenêtre de notation, étoiles affichées.',
            ],
          ].map(([title, text], index) => (
            <li key={title} className="flex flex-col gap-2.5 rounded-3xl border border-line p-7">
              <span className="font-display text-3xl font-extrabold text-brand-600">
                {index + 1}
              </span>
              <strong className="text-lg">{title}</strong>
              <span className="leading-relaxed text-muted">{text}</span>
            </li>
          ))}
        </ol>
        <div className="mt-8 max-w-xl">
          <GuideCard slug="recuperer-lien-google-business" eyebrow="Le guide complet" />
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-4xl px-4 py-20">
          <h2 className="mb-8 text-center font-display text-[clamp(28px,3.5vw,36px)] font-extrabold">
            QR code imprimé ou plaque NFC ?
          </h2>
          <div className="overflow-x-auto rounded-3xl border border-line bg-white">
            <table className="w-full min-w-[520px] border-collapse">
              <thead>
                <tr>
                  <th scope="col" className="p-5 text-left" />
                  <th scope="col" className="p-5">
                    QR code gratuit
                  </th>
                  <th scope="col" className="p-5 text-brand-600">
                    Plaque Youzplate
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map(([label, free, plateValue]) => (
                  <tr key={label} className="border-t border-line">
                    <th scope="row" className="p-5 text-left font-medium">
                      {label}
                    </th>
                    <td className="p-5 text-center text-muted">{free}</td>
                    <td className="p-5 text-center font-bold">{plateValue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-20">
        <h2 className="mb-6 font-display text-3xl font-extrabold">Questions fréquentes</h2>
        <FaqList items={FAQ} />
      </section>

      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'Générateur de QR code avis Google',
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Web',
          url: `${SITE.url}/qr-code-avis-google`,
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
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
