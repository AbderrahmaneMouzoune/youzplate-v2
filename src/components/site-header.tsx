import Link from 'next/link'

import { CartLink } from '@/components/cart-link'
import { Logo } from '@/components/logo'

const NAV = [
  { href: '/plaques', label: 'Les plaques' },
  { href: '/#comment-ca-marche', label: 'Comment ça marche' },
  { href: '/guides', label: 'Guides' },
  { href: '/#faq', label: 'FAQ' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        <Link href="/" aria-label="Youzplate, accueil">
          <Logo />
        </Link>
        <nav aria-label="Navigation principale" className="hidden md:block">
          <ul className="flex items-center gap-7 text-sm font-medium text-muted">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <CartLink />
      </div>
      {/* Navigation mobile : une rangée défilante plutôt qu'un menu burger, quatre liens suffisent. */}
      <nav aria-label="Navigation principale (mobile)" className="border-t border-line md:hidden">
        <ul className="flex gap-5 overflow-x-auto px-4 py-2 text-sm font-medium whitespace-nowrap text-muted">
          {NAV.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
