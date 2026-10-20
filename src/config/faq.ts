import { SHIPPING } from '@/config/site'

export type FaqItem = { question: string; answer: string }

/**
 * Questions fréquentes, reprises de l'ancienne boutique et complétées.
 * Elles alimentent l'accordéon de l'accueil et le JSON-LD `FAQPage`.
 */
export const FAQ: FaqItem[] = [
  {
    question: 'Faut-il payer un abonnement ?',
    answer:
      'Non. Vous payez la plaque une fois, et c’est tout : pas d’abonnement, pas de frais cachés, pas de limite de scans.',
  },
  {
    question: 'Comment fonctionne la plaque ?',
    answer:
      'Elle combine une puce NFC et un QR code. Vos clients approchent leur téléphone de la plaque, ou scannent le QR code avec l’appareil photo : votre page s’ouvre directement, sans application à installer.',
  },
  {
    question: 'Comment j’associe ma page à la plaque ?',
    answer:
      'À réception, scannez votre plaque : une page de configuration s’ouvre. Indiquez l’e-mail utilisé pour la commande et le lien de votre page, on s’occupe du reste. Nos guides expliquent où trouver ce lien pour chaque plateforme.',
  },
  {
    question: 'Puis-je changer le lien plus tard ?',
    answer:
      'Oui, gratuitement et à tout moment. Vous changez de fiche, de compte ou d’établissement ? Écrivez-nous, la plaque pointe vers le nouveau lien sans être remplacée.',
  },
  {
    question: 'La plaque a-t-elle besoin de piles ou d’Internet ?',
    answer:
      'Non. La puce NFC est alimentée par le téléphone qui la lit, et le QR code est imprimé. Rien à recharger, rien à brancher.',
  },
  {
    question: 'Est-ce compatible avec tous les téléphones ?',
    answer:
      'Le QR code se lit avec l’appareil photo de n’importe quel smartphone récent. Le NFC fonctionne sur tous les iPhone depuis le XS et sur la quasi-totalité des Android.',
  },
  {
    question: 'Quels sont les délais de livraison ?',
    answer: `Votre commande est expédiée sous 48 heures ouvrées et livrée en ${SHIPPING.minBusinessDays} à ${SHIPPING.maxBusinessDays} jours ouvrés. La livraison est offerte.`,
  },
  {
    question: 'A-t-on le droit d’offrir une contrepartie contre un avis ?',
    answer:
      'Non : Google, TripAdvisor et la loi française interdisent d’acheter ou de récompenser un avis. La plaque rend l’avis plus facile à laisser, elle ne remplace pas une bonne expérience client.',
  },
]
