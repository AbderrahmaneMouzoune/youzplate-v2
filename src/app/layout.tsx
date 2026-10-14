import { Inter } from 'next/font/google'

import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { SITE } from '@/config/site'
import { env } from '@/env'

import type { Metadata, Viewport } from 'next'

import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} · ${SITE.tagline}`,
    template: `%s · ${SITE.name}`,
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
  themeColor: '#3e4aa8',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={inter.variable}>
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
      </body>
    </html>
  )
}
