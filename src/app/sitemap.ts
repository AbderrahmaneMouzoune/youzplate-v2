import { PLATES } from '@/config/catalog'
import { SITE } from '@/config/site'

import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', '/plaques', '/guides', '/cgv', '/mentions-legales', '/confidentialite']
  return [
    ...pages.map((path) => ({ url: `${SITE.url}${path}` })),
    ...PLATES.map((plate) => ({
      url: `${SITE.url}/plaques/${plate.slug}`,
      images: [`${SITE.url}${plate.image}`],
    })),
  ]
}
