/** Adresses locales, seules autorisées à rester en `http://`. */
const LOCAL_HTTP = /^http:\/\/(localhost|127\.0\.0\.1|\[::1\])(:\d+)?(\/|$)/i

/**
 * Remet en forme l'URL du site telle qu'on la saisit dans un tableau de bord :
 * espaces et guillemets retirés, `https://` ajouté s'il manque (et imposé hors
 * local), slash final supprimé. `youzplate.fr` comme `"https://youzplate.fr/ "` donnent
 * `https://youzplate.fr`. Une valeur vide reste vide, pour que la validation
 * la signale comme manquante.
 */
export function normalizeSiteUrl(raw: unknown): unknown {
  if (typeof raw !== 'string') return raw
  const value = raw
    .trim()
    .replace(/^["']+|["']+$/g, '')
    .trim()
  if (!value) return undefined
  const withScheme = /^[a-z][a-z0-9+.-]*:\/\//i.test(value) ? value : `https://${value}`
  // Un site public sert en https : `http://` n'est gardé qu'en local, sinon les
  // canonicals, le sitemap et le flux Merchant Center pointeraient vers http.
  const secure = LOCAL_HTTP.test(withScheme)
    ? withScheme
    : withScheme.replace(/^http:\/\//i, 'https://')
  return secure.replace(/\/+$/, '')
}

/**
 * URL publique déduite de Vercel quand `NEXT_PUBLIC_SITE_URL` n'est pas
 * renseignée : le domaine de production, à défaut l'URL du déploiement.
 */
export function vercelSiteUrl(env: Record<string, string | undefined>): string | undefined {
  const host = env.VERCEL_PROJECT_PRODUCTION_URL || env.VERCEL_URL
  return host ? `https://${host}` : undefined
}
