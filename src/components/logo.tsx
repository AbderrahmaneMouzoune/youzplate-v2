/** Logo texte : un pictogramme QR stylisé suivi du nom. */
export function Logo({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 font-bold tracking-tight ${className}`}>
      <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true" className="shrink-0">
        <rect width="28" height="28" rx="7" fill="var(--color-brand-600)" />
        <rect x="6" y="6" width="7" height="7" rx="1.5" fill="#fff" />
        <rect x="15" y="6" width="7" height="7" rx="1.5" fill="#fff" />
        <rect x="6" y="15" width="7" height="7" rx="1.5" fill="#fff" />
        <rect x="16.5" y="16.5" width="4" height="4" rx="1" fill="var(--color-star)" />
      </svg>
      <span className="text-xl">
        youz<span className="text-brand-600">plate</span>
      </span>
    </span>
  )
}
