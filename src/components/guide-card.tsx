import { GUIDES, guideUrl, type GuideSlug } from '@/config/guides'

/** Lien vers un guide du blog youzoune.com (site externe, même éditeur). */
export function GuideCard({ slug, eyebrow }: { slug: GuideSlug; eyebrow?: string }) {
  const guide = GUIDES[slug]
  return (
    <a
      href={guideUrl(slug)}
      className="group flex flex-col gap-2 rounded-2xl border border-line bg-white p-5 transition hover:border-brand-200 hover:shadow-lg hover:shadow-brand-900/5"
    >
      {eyebrow && (
        <span className="text-xs font-semibold tracking-wide text-brand-600 uppercase">
          {eyebrow}
        </span>
      )}
      <span className="font-semibold group-hover:text-brand-700">{guide.title}</span>
      <span className="flex-1 text-sm text-muted">{guide.excerpt}</span>
      <span className="text-sm font-semibold text-youzoune">Lire le guide sur youzoune.com ↗</span>
    </a>
  )
}
