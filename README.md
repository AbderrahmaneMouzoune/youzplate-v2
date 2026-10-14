# Youzplate

Boutique en ligne des plaques Youzplate : plaques NFC + QR code qui ouvrent la page d'avis
Google, TripAdvisor, Doctolib ou le profil Instagram, TikTok, Snapchat d'un commerce.

Next.js 16 (App Router, Cache Components) · Tailwind CSS 4 · Stripe Checkout · Resend · Bun.

## Démarrer

```bash
cp .env.example .env.local   # puis renseigner les clés
bun install
bun dev
```

`bun run check` enchaîne typecheck, lint, format et tests (à lancer avant chaque PR).

## Comment ça marche

| Étape                    | Où                                                                  |
| ------------------------ | ------------------------------------------------------------------- |
| Catalogue et prix        | `src/config/catalog.ts` (source de vérité, côté serveur)            |
| Panier                   | `src/lib/cart-store.ts` — localStorage, slugs + quantités seulement |
| Paiement                 | `src/app/actions/checkout.ts` → session Stripe Checkout hébergée    |
| Paramètres de la session | `src/lib/checkout.ts` (fonction pure, testée)                       |
| Commande payée           | `src/app/api/stripe/webhook/route.ts` → e-mail à l'équipe           |
| Confirmation client      | `/commande/confirmation?session_id=…`                               |
| Guides                   | `src/config/guides.ts` → articles du blog youzoune.com              |

Le navigateur n'envoie jamais de prix : le serveur relit le catalogue à chaque paiement. Il n'y a
pas de base de données, Stripe est le registre des commandes (dashboard → Paiements).

## Mise en production

1. **Domaine** : créer le projet Vercel, brancher le domaine retenu, renseigner
   `NEXT_PUBLIC_SITE_URL` (lue au build) et `IS_INDEXABLE=true` en production uniquement.
2. **Stripe** : `STRIPE_SECRET_KEY` (live), puis un endpoint webhook
   `https://<domaine>/api/stripe/webhook` sur `checkout.session.completed` et
   `checkout.session.async_payment_succeeded` → `STRIPE_WEBHOOK_SECRET`.
   Dans les réglages Stripe : activer les reçus e-mail clients, le nom public « Youzplate »
   et les moyens de paiement voulus (carte, Apple Pay, Google Pay…).
3. **Resend** : `RESEND_API_KEY`, `ORDER_EMAIL_FROM` (domaine vérifié), `ORDER_EMAIL_TO`.
4. **Vitrine** : renseigner `NEXT_PUBLIC_YOUZPLATE_URL` sur youzoune-vitrine pour que les
   anciennes URLs (`/youzplate`, `/produits/plaque-*`) et les articles renvoient vers la boutique.

## À valider avant le lancement

- [ ] **Prix** : 29,90 € TTC l'unité est provisoire (`UNIT_AMOUNT` dans `catalog.ts`), l'ancien
      prix vivait dans Strapi.
- [ ] **TVA** : prix affichés TTC ; vérifier le régime (franchise en base ou TVA collectée) et
      l'activer dans Stripe Tax si besoin.
- [ ] **CGV** (`src/app/cgv/page.tsx`) : trame à faire relire, nommer le médiateur de la consommation.
- [ ] **Livraison** : pays desservis et délais dans `SHIPPING` (`src/config/site.ts`).

## Plaques physiques

Les plaques imprimées pointent vers `redirect.youzoune.com/plates/<type>/r?…`, servi par le
Strapi historique (`youzoune/strapi`, collection `plates`). Une plaque sans lien renvoie vers
`youzoune.com/setup-plate/<type>/<numéro>` (vitrine), où le client associe sa page. Cette boutique
ne touche pas à ce circuit : elle vend, la vitrine et Strapi configurent et redirigent.
