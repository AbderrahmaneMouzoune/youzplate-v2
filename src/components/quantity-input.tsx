'use client'

type Props = {
  value: number
  onChange: (value: number) => void
  max: number
  /** Nom accessible du champ, par ex. « Quantité de Plaque avis Google ». */
  label: string
  /** Autorise 0 (le panier s'en sert pour retirer une ligne). */
  min?: number
}

export function QuantityInput({ value, onChange, max, label, min = 1 }: Props) {
  const clamp = (next: number) => Math.min(Math.max(min, Number.isNaN(next) ? min : next), max)

  return (
    <div className="inline-flex items-center rounded-full border border-line bg-white">
      <button
        type="button"
        onClick={() => onChange(clamp(value - 1))}
        disabled={value <= min}
        className="grid size-11 place-items-center rounded-full text-lg disabled:opacity-30"
        aria-label={`Diminuer : ${label}`}
      >
        −
      </button>
      <input
        type="number"
        inputMode="numeric"
        min={min}
        max={max}
        value={value}
        onChange={(event) => onChange(clamp(Number.parseInt(event.target.value, 10)))}
        aria-label={label}
        className="w-10 [appearance:textfield] bg-transparent text-center font-semibold [&::-webkit-inner-spin-button]:appearance-none"
      />
      <button
        type="button"
        onClick={() => onChange(clamp(value + 1))}
        disabled={value >= max}
        className="grid size-11 place-items-center rounded-full text-lg disabled:opacity-30"
        aria-label={`Augmenter : ${label}`}
      >
        +
      </button>
    </div>
  )
}
