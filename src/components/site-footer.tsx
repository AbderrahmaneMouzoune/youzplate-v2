import Link from 'next/link'

import { CookiePreferencesButton } from '@/components/cookie-consent'
import { Logo } from '@/components/logo'
import { PLATES } from '@/config/catalog'
import { SHIPPING, SITE, YOUZOUNE_URL } from '@/config/site'
import { FEATURED_METIERS } from '@/data/metiers'

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-line bg-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-5">
        <div className="space-y-3 lg:col-span-1">
          <Logo />
          <p className="text-sm text-muted">
            Des plaques NFC et QR code qui transforment vos clients satisfaits en avis et en
            abonnés.
          </p>
          <p className="text-sm text-muted">
            Une solution{' '}
            <a href={YOUZOUNE_URL} className="font-semibold text-youzoune hover:underline">
              Youzoune
            </a>
          </p>
        </div>

        <FooterColumn title="Les plaques">
          {PLATES.map((plate) => (
            <li key={plate.slug}>
              <Link href={`/${plate.slug}`}>{plate.name}</Link>
            </li>
          ))}
          <li>
            <Link href="/plaque-avis-google-instagram">Pack Google + Instagram</Link>
          </li>
        </FooterColumn>

        <FooterColumn title="Par métier">
          {FEATURED_METIERS.map((metier) => (
            <li key={metier.path}>
              <Link href={metier.path}>{metier.name}</Link>
            </li>
          ))}
          <li>
            <Link href="/metiers" className="font-semibold">
              Tous les métiers
            </Link>
          </li>
        </FooterColumn>

        <FooterColumn title="Aide">
          <li>
            <Link href="/qr-code-avis-google">QR code avis Google gratuit</Link>
          </li>
          <li>
            <Link href="/guides">Guides de configuration</Link>
          </li>
          <li>
            <Link href="/plaque-avis-google-francaise">Plaque française ou importée ?</Link>
          </li>
          <li>
            <Link href="/#faq">Questions fréquentes</Link>
          </li>
          <li>
            <a href={`mailto:${SITE.contact.email}`}>{SITE.contact.email}</a>
          </li>
          <li>
            <a href={SITE.contact.phoneHref}>{SITE.contact.phone}</a>
          </li>
        </FooterColumn>

        <FooterColumn title="Informations">
          <li>
            <Link href="/cgv">Conditions générales de vente</Link>
          </li>
          <li>
            <Link href="/mentions-legales">Mentions légales</Link>
          </li>
          <li>
            <Link href="/confidentialite">Confidentialité</Link>
          </li>
          <li>
            <CookiePreferencesButton className="hover:text-ink" />
          </li>
        </FooterColumn>
      </div>
      <p className="border-t border-line px-4 py-5 text-center text-xs text-muted">
        Paiement sécurisé par Stripe · Livraison offerte : {SHIPPING.zoneLabel}
      </p>
    </footer>
  )
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="mb-3 text-sm font-semibold">{title}</h2>
      <ul className="space-y-2 text-sm text-muted [&_a:hover]:text-ink">{children}</ul>
    </div>
  )
}
