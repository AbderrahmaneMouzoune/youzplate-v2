import { formatPrice } from '@/lib/format'

import type Stripe from 'stripe'

/** Échappe le texte saisi par le client avant de l'insérer dans le HTML de l'e-mail. */
function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

function formatAddress(address: Stripe.Address | null | undefined): string[] {
  if (!address) return []
  return [
    address.line1,
    address.line2,
    [address.postal_code, address.city].filter(Boolean).join(' '),
    address.country,
  ].filter((line): line is string => Boolean(line))
}

/**
 * E-mail interne envoyé à l'équipe pour chaque commande payée : de quoi
 * préparer le colis et attribuer les numéros de série, sans ouvrir Stripe.
 */
export function buildOrderNotification(
  session: Stripe.Checkout.Session,
  lineItems: Stripe.LineItem[]
): { subject: string; html: string; text: string } {
  const customer = session.customer_details
  const shipping = session.collected_information?.shipping_details
  const establishment = session.custom_fields?.find((field) => field.key === 'etablissement')?.text
    ?.value

  const items = lineItems.map(
    (item) =>
      `${item.quantity ?? 1} × ${item.description ?? 'Plaque'} (${formatPrice(item.amount_total)})`
  )
  const plateCount = lineItems.reduce((sum, item) => sum + (item.quantity ?? 0), 0)
  const total = formatPrice(session.amount_total ?? 0)

  const rows: [string, string[]][] = [
    ['Articles', items],
    ['Total payé', [total]],
    ['Établissement', establishment ? [establishment] : []],
    ['Client', [customer?.name, customer?.email, customer?.phone].filter((v): v is string => !!v)],
    [
      'Livraison',
      [shipping?.name, ...formatAddress(shipping?.address)].filter((v): v is string => !!v),
    ],
    ['Session Stripe', [session.id]],
  ]

  const subject = `[Youzplate] Nouvelle commande · ${plateCount} plaque${plateCount > 1 ? 's' : ''} · ${total}`

  const html = `<h2>Nouvelle commande Youzplate</h2>
<table cellpadding="6" style="border-collapse:collapse;font-family:sans-serif;font-size:14px">
${rows
  .filter(([, values]) => values.length > 0)
  .map(
    ([label, values]) =>
      `<tr><th align="left" valign="top">${label}</th><td>${values.map(escapeHtml).join('<br>')}</td></tr>`
  )
  .join('\n')}
</table>
<p style="font-family:sans-serif;font-size:14px">Prochaine étape : attribuer les numéros de série dans l’admin des plaques, puis expédier.</p>`

  const text = rows
    .filter(([, values]) => values.length > 0)
    .map(([label, values]) => `${label} :\n  ${values.join('\n  ')}`)
    .join('\n\n')

  return { subject, html, text }
}
