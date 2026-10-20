import { Bricolage_Grotesque, Instrument_Sans } from 'next/font/google'

import { JsonLd } from '@/components/json-ld'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { LEGAL_ENTITY, SITE, YOUZOUNE_URL } from '@/config/site'
import { env } from '@/env'

import type { Metadata, Viewport } from 'next'

import './globals.css'

const display = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['500', '700', '800'],
  variable: '--font-bricolage',
})
const body = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-instrument',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} · ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  openGraph: {
    type: 'website',
    locale: SITE.locale,
    siteName: SITE.name,
    images: [{ url: '/plaques/google.webp', width: 1000, height: 1000 }],
  },
  // Même règle que la vitrine : indexable uniquement si IS_INDEXABLE vaut 'true'.
  robots: env.IS_INDEXABLE ? undefined : { index: false, follow: false },
}

export const viewport: Viewport = {
  themeColor: '#3b44b8',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${display.variable} ${body.variable}`}>
      <body className="flex min-h-dvh flex-col font-sans">
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded focus:bg-white focus:px-3 focus:py-2"
        >
          Aller au contenu
        </a>
        <SiteHeader />
        <main id="contenu" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: SITE.name,
            url: SITE.url,
            logo: `${SITE.url}/plaques/google.webp`,
            email: SITE.contact.email,
            telephone: '+33744319570',
            parentOrganization: {
              '@type': 'Organization',
              name: LEGAL_ENTITY.tradeName,
              url: YOUZOUNE_URL,
            },
          }}
        />
      </body>
    </html>
  )
}
