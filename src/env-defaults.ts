import { normalizeSiteUrl, vercelSiteUrl } from './lib/site-url'

/**
 * Chargé par `next.config.ts` avant la validation de `src/env.ts`, donc avant
 * que Next n'inline les variables `NEXT_PUBLIC_*` dans le code client.
 *
 * Corrige `NEXT_PUBLIC_SITE_URL` saisie sans `https://` ou avec des espaces,
 * et la déduit du domaine Vercel quand elle est absente (déploiements de
 * preview), plutôt que de faire échouer le build.
 */
const siteUrl = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL) ?? vercelSiteUrl(process.env)

if (typeof siteUrl === 'string') process.env.NEXT_PUBLIC_SITE_URL = siteUrl
