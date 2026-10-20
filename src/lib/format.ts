const EUR = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' })

/** Formate un montant en centimes : `2990` → « 29,90 € ». */
export function formatPrice(amountInCents: number): string {
  return EUR.format(amountInCents / 100)
}
