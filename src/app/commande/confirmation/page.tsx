import Link from 'next/link'
import { Suspense } from 'react'

import { ClearCart } from '@/components/clear-cart'
import { SHIPPING, SITE } from '@/config/site'
import { formatPrice } from '@/lib/format'
import { getStripe } from '@/lib/stripe'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Commande confirmée',
  robots: { index: false, follow: false },
}

type Props = { searchParams: Promise<{ session_id?: string | string[] }> }

export default function ConfirmationPage({ searchParams }: Props) {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16">
      <Suspense fallback={<div className="h-64 animate-pulse rounded-2xl bg-paper" />}>
        <OrderSummary searchParams={searchParams} />
      </Suspense>
    </div>
  )
}

async function OrderSummary({ searchParams }: Props) {
  const { session_id: sessionId } = await searchParams
  const stripe = getStripe()

  // Les identifiants Stripe sont de la forme `cs_test_…` / `cs_live_…`.
  if (!stripe || typeof sessionId !== 'string' || !/^cs_[A-Za-z0-9_]+$/.test(sessionId)) {
    return <Unknown />
  }

  const session = await stripe.checkout.sessions.retrieve(sessionId).catch(() => null)
  if (!session || session.status !== 'complete') return <Unknown />

  const paid = session.payment_status === 'paid'

  return (
    <div className="space-y-8 text-center">
      {paid && <ClearCart />}
      <div className="mx-auto grid size-16 place-items-center rounded-full bg-green-100 text-3xl text-green-700">
        ✓
      </div>
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight">
          {paid ? 'Merci, votre commande est confirmée !' : 'Commande enregistrée'}
        </h1>
        <p className="mt-3 text-muted">
          {paid
            ? `Paiement de ${formatPrice(session.amount_total ?? 0)} reçu. `
            : 'Votre paiement est en cours de validation. '}
          Un reçu a été envoyé à <strong>{session.customer_details?.email}</strong>.
        </p>
      </div>

      <ol className="space-y-4 rounded-2xl bg-paper p-6 text-left ring-1 ring-line">
        <li>
          <strong>1. Expédition sous 48 h ouvrées</strong>, livraison en {SHIPPING.minBusinessDays}{' '}
          à {SHIPPING.maxBusinessDays} jours ouvrés.
        </li>
        <li>
          <strong>2. À réception, scannez votre plaque</strong> : une page de configuration s’ouvre.
          Indiquez l’e-mail de la commande et le lien de votre page.
        </li>
        <li>
          <strong>3. C’est prêt.</strong> Posez la plaque là où vos clients passent.
        </li>
      </ol>

      <div className="flex flex-wrap justify-center gap-3">
        <Link
          href="/guides"
          className="rounded-full bg-brand-600 px-6 py-3 font-semibold text-white transition hover:bg-brand-700"
        >
          Préparer mon lien avec les guides
        </Link>
        <Link href="/" className="rounded-full border border-line px-6 py-3 font-semibold">
          Retour à l’accueil
        </Link>
      </div>
    </div>
  )
}

function Unknown() {
  return (
    <div className="space-y-4 text-center">
      <h1 className="text-3xl font-extrabold tracking-tight">Commande introuvable</h1>
      <p className="text-muted">
        Nous ne retrouvons pas cette commande. Si vous avez été débité, écrivez-nous à{' '}
        <a href={`mailto:${SITE.contact.email}`} className="font-semibold text-brand-600">
          {SITE.contact.email}
        </a>
        , nous vérifions tout de suite.
      </p>
      <Link href="/panier" className="inline-block font-semibold text-brand-600 underline">
        Revenir au panier
      </Link>
    </div>
  )
}
