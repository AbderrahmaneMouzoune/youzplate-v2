import Link from 'next/link'

import { CartLink } from '@/components/cart-link'
import { Logo } from '@/components/logo'
import { SHIPPING } from '@/config/site'

const NAV = [
  { href: '/plaque-nfc', label: 'Les plaques' },
  { href: '/metiers', label: 'Par métier' },
  { href: '/qr-code-avis-google', label: 'QR code gratuit' },
  { href: '/guides', label: 'Guides' },
  { href: '/#faq', label: 'FAQ' },
]

export function SiteHeader() {
  return (
    <>
      <p className="flex flex-wrap justify-center gap-x-7 gap-y-1 bg-ink px-4 py-2 text-center text-sm text-white">
        <span className="font-semibold">Livraison offerte</span>
        <span>
          Livrée en {SHIPPING.minBusinessDays} à {SHIPPING.maxBusinessDays} jours ouvrés
        </span>
        <span className="hidden sm:inline">Sans abonnement, lien modifiable à vie</span>
      </p>
      <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
          <Link href="/" aria-label="Youzplate, accueil">
            <Logo />
          </Link>
          <nav aria-label="Navigation principale" className="hidden lg:block">
            <ul className="flex items-center gap-7 text-[15px] font-medium">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition hover:text-brand-600">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <CartLink />
        </div>
        {/* Navigation mobile : une rangée défilante plutôt qu'un menu burger. */}
        <nav aria-label="Navigation principale (mobile)" className="border-t border-line lg:hidden">
          <ul className="flex gap-5 overflow-x-auto px-4 py-2.5 text-sm font-medium whitespace-nowrap">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  )
}
