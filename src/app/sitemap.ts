import { PLATES } from '@/config/catalog'
import { SITE } from '@/config/site'
import { METIERS, metierPath } from '@/data/metiers'

import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const url = (path: string) => `${SITE.url}${path}`

  return [
    { url: url(''), priority: 1 },
    { url: url('/plaque-nfc'), priority: 0.9 },
    ...PLATES.map((plate) => ({
      url: url(`/${plate.slug}`),
      priority: 0.9,
      images: [url(plate.image)],
    })),
    { url: url('/plaque-avis-google-instagram'), priority: 0.8 },
    { url: url('/metiers'), priority: 0.7 },
    ...METIERS.map((metier) => ({ url: url(metierPath(metier)), priority: 0.7 })),
    { url: url('/qr-code-avis-google'), priority: 0.8 },
    { url: url('/plaque-avis-google-francaise'), priority: 0.6 },
    { url: url('/guides'), priority: 0.5 },
    ...['/cgv', '/mentions-legales', '/confidentialite'].map((path) => ({
      url: url(path),
      priority: 0.2,
    })),
  ]
}
