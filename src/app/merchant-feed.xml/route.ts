import { PLATES } from '@/config/catalog'
import { SHIPPING, SITE } from '@/config/site'

/**
 * Flux produits Google Merchant Center (RSS 2.0, espace de noms `g:`).
 *
 * À déclarer dans Merchant Center → Produits → Flux, URL `/merchant-feed.xml`,
 * pour apparaître gratuitement dans l'onglet Shopping de Google.
 * @see https://support.google.com/merchants/answer/7052112
 */
function xml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

export function GET() {
  const shipping = SHIPPING.countries
    .map(
      (country) =>
        `<g:shipping><g:country>${country}</g:country><g:price>${(SHIPPING.amount / 100).toFixed(2)} EUR</g:price><g:min_transit_time>${SHIPPING.minBusinessDays}</g:min_transit_time><g:max_transit_time>${SHIPPING.maxBusinessDays}</g:max_transit_time></g:shipping>`
    )
    .join('')

  const items = PLATES.map(
    (plate) => `<item>
<g:id>${plate.slug}</g:id>
<g:title>${xml(`${plate.name} NFC et QR code`)}</g:title>
<g:description>${xml(plate.metaDescription)}</g:description>
<g:link>${SITE.url}/${plate.slug}</g:link>
<g:image_link>${SITE.url}${plate.image}</g:image_link>
<g:availability>in_stock</g:availability>
<g:price>${(plate.unitAmount / 100).toFixed(2)} EUR</g:price>
<g:brand>${SITE.name}</g:brand>
<g:condition>new</g:condition>
<g:identifier_exists>no</g:identifier_exists>
${shipping}
</item>`
  ).join('\n')

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:g="http://base.google.com/ns/1.0">
<channel>
<title>${SITE.name}</title>
<link>${SITE.url}</link>
<description>${xml(SITE.description)}</description>
${items}
</channel>
</rss>`

  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } })
}
