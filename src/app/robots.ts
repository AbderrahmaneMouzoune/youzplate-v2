import { SITE } from '@/config/site'
import { env } from '@/env'

import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  if (!env.IS_INDEXABLE) return { rules: { userAgent: '*', disallow: '/' } }
  return {
    rules: { userAgent: '*', allow: '/', disallow: ['/panier', '/commande/', '/api/', '/ingest/'] },
    sitemap: `${SITE.url}/sitemap.xml`,
  }
}
