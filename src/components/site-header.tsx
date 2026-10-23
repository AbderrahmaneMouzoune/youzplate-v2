import Link from 'next/link'

import { CartLink } from '@/components/cart-link'
import { Logo } from '@/components/logo'
import { MegaMenu } from '@/components/mega-menu'
import { MobileMenu } from '@/components/mobile-menu'
import { getNavData } from '@/components/nav-data'
import { SHIPPING } from '@/config/site'

export function SiteHeader() {
  const nav = getNavData()

  return (
    <>
      <p className="flex flex-wrap justify-center gap-x-7 gap-y-1 bg-ink px-4 py-2 text-center text-sm text-white">
        <span className="font-semibold">Livraison offerte</span>
        <span>
          Livrée en {SHIPPING.minBusinessDays} à {SHIPPING.maxBusinessDays} jours ouvrés
        </span>
        <span className="hidden sm:inline">Sans abonnement, lien modifiable à vie</span>
      </p>
      <header className="sticky top-0 z-40 border-b border-line bg-white">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
          <Link href="/" aria-label="Youzplate, accueil">
            <Logo />
          </Link>
          <MegaMenu data={nav} />
          <div className="flex items-center gap-2">
            <CartLink />
            <MobileMenu data={nav} />
          </div>
        </div>
      </header>
    </>
  )
}
