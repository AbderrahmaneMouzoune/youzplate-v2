'use client'

import QRCode from 'qrcode'
import { useState, type FormEvent } from 'react'

const GOOGLE_REVIEW_PATTERNS = [
  /^https:\/\/g\.page\/r\/[^/]+\/review/i,
  /^https:\/\/search\.google\.com\/local\/writereview/i,
  /^https:\/\/(www\.)?google\.[a-z.]+\/maps/i,
  /^https:\/\/maps\.app\.goo\.gl\//i,
  /^https:\/\/g\.co\/kgs\//i,
]

/** Vrai si l'URL ressemble à un lien d'avis ou de fiche Google. */
export function looksLikeGoogleReviewLink(url: string): boolean {
  return GOOGLE_REVIEW_PATTERNS.some((pattern) => pattern.test(url.trim()))
}

type Result = { url: string; png: string; svg: string }

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (char) => `&#${char.charCodeAt(0)};`)
}

/**
 * Générateur de QR code 100 % navigateur : le lien ne quitte pas l'appareil
 * et le QR code pointe directement vers Google, sans redirection par nos serveurs.
 */
export function QrGenerator() {
  const [link, setLink] = useState('')
  const [result, setResult] = useState<Result | null>(null)
  const [error, setError] = useState<string | null>(null)

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault()
    const url = link.trim()
    let parsed: URL
    try {
      parsed = new URL(url)
    } catch {
      setError('Collez un lien complet, qui commence par https://')
      setResult(null)
      return
    }
    if (parsed.protocol !== 'https:') {
      setError('Le lien doit commencer par https://')
      setResult(null)
      return
    }
    setError(null)
    const options = { errorCorrectionLevel: 'M' as const, margin: 2 }
    const [png, svg] = await Promise.all([
      QRCode.toDataURL(url, { ...options, width: 1024 }),
      QRCode.toString(url, { ...options, type: 'svg' }),
    ])
    setResult({ url, png, svg: `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}` })
  }

  const printPoster = () => {
    if (!result) return
    const poster = window.open('', '_blank', 'width=600,height=800')
    if (!poster) return
    poster.document
      .write(`<!doctype html><html lang="fr"><head><meta charset="utf-8"><title>Affiche avis Google</title>
<style>@page{size:A5;margin:0}body{margin:0;font-family:system-ui,sans-serif;color:#14162e}
.p{height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;text-align:center;padding:32px;box-sizing:border-box}
h1{font-size:34px;margin:0}.s{color:#e09a00;font-size:30px;letter-spacing:4px}img{width:62%;max-width:320px}p{margin:0;font-size:18px}small{color:#4a4d68;font-size:11px;margin-top:24px}</style></head>
<body><div class="p"><div class="s">★★★★★</div><h1>Votre avis compte&nbsp;!</h1><p>Scannez pour laisser un avis Google<br>en moins de 30 secondes.</p>
<img src="${result.png}" alt=""><small>QR code gratuit créé sur youzplate.fr · ${escapeHtml(new URL(result.url).hostname)}</small></div>
<script>window.onload=function(){window.print()}</script></body></html>`)
    poster.document.close()
  }

  const warning = result && !looksLikeGoogleReviewLink(result.url)

  return (
    <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-4 rounded-[28px] bg-white p-7 shadow-[0_10px_30px_rgba(20,22,46,0.06)] sm:p-8"
      >
        <label htmlFor="lien-avis" className="text-base font-bold">
          Lien d’avis de votre fiche Google
        </label>
        <input
          id="lien-avis"
          type="url"
          inputMode="url"
          required
          value={link}
          onChange={(event) => setLink(event.target.value)}
          placeholder="https://g.page/r/…/review"
          aria-describedby="lien-aide"
          aria-invalid={error ? true : undefined}
          className="min-h-14 rounded-2xl border-2 border-[#D3D5E6] px-4 text-[17px] outline-none focus:border-brand-600"
        />
        <p id="lien-aide" className="text-sm text-muted">
          Vous ne l’avez pas ?{' '}
          <a href="#recuperer-le-lien" className="font-semibold text-brand-600 underline">
            Voici comment le récupérer
          </a>{' '}
          en 1 minute.
        </p>
        {error && (
          <p role="alert" className="text-sm font-semibold text-red-700">
            {error}
          </p>
        )}
        <button
          type="submit"
          className="mt-1 min-h-14 rounded-full bg-ink px-6 text-[17px] font-extrabold text-white transition hover:bg-brand-700"
        >
          Générer mon QR code
        </button>
      </form>

      <div
        className="flex flex-col items-center justify-center gap-4 rounded-[28px] bg-white p-7 text-center sm:p-8"
        aria-live="polite"
      >
        {result ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element -- data URL générée dans le navigateur */}
            <img
              src={result.png}
              alt="Votre QR code avis Google"
              width={220}
              height={220}
              className="rounded-2xl border border-line"
            />
            <strong className="text-lg">Votre QR code est prêt</strong>
            {warning && (
              <p className="text-sm text-amber-800">
                Ce lien ne ressemble pas à un lien d’avis Google. Vérifiez-le en scannant le code
                avant d’imprimer.
              </p>
            )}
            <div className="flex flex-wrap justify-center gap-2.5">
              <a
                href={result.png}
                download="qr-code-avis-google.png"
                className="inline-flex min-h-12 items-center rounded-full border-2 border-ink px-5 font-bold"
              >
                PNG
              </a>
              <a
                href={result.svg}
                download="qr-code-avis-google.svg"
                className="inline-flex min-h-12 items-center rounded-full border-2 border-ink px-5 font-bold"
              >
                SVG (vectoriel)
              </a>
              <button
                type="button"
                onClick={printPoster}
                className="inline-flex min-h-12 items-center rounded-full bg-ink px-5 font-bold text-white"
              >
                Imprimer l’affiche A5
              </button>
            </div>
          </>
        ) : (
          <div className="grid size-[220px] place-items-center rounded-2xl border-2 border-dashed border-brand-200 p-6 text-[15px] text-muted">
            Votre QR code apparaîtra ici
          </div>
        )}
      </div>
    </div>
  )
}
