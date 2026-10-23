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

## Pages

| URL                                                         | Rôle                                                                  |
| ----------------------------------------------------------- | --------------------------------------------------------------------- |
| `/`                                                         | Accueil : démo animée, choix de la plateforme, packs, comparatif, FAQ |
| `/plaque-nfc`                                               | Catégorie : les 6 plaques et les packs                                |
| `/plaque-avis-google`, `/plaque-instagram`…                 | Fiches produit (slugs = requêtes tapées)                              |
| `/plaque-avis-google-instagram`                             | Pack Duo Google + Instagram                                           |
| `/metiers`                                                  | Hub des pages métier                                                  |
| `/plaque-avis-google/<métier>`, `/plaque-doctolib/<métier>` | 39 pages métier (`src/data/metiers/`)                                 |
| `/qr-code-avis-google`                                      | Outil gratuit : QR code avis Google (PNG, SVG, affiche A5)            |
| `/plaque-avis-google-francaise`                             | Comparatif plaque française / importée / abonnement                   |
| `/merchant-feed.xml`                                        | Flux Google Merchant Center (fiches Shopping gratuites)               |

Les anciennes URLs (`/produits/*` de youzoune.com, `/plaques/*` de la première version)
sont redirigées en 308 dans `next.config.ts`.

## Comment ça marche

| Étape                    | Où                                                                                      |
| ------------------------ | --------------------------------------------------------------------------------------- |
| Catalogue et prix        | `src/config/catalog.ts` (source de vérité, côté serveur)                                |
| Remises de volume        | `src/lib/pricing.ts` : −10 % dès 2 plaques, −20 % dès 5, toutes plateformes confondues  |
| Panier                   | `src/lib/cart-store.ts` — localStorage, slugs + quantités seulement                     |
| Paiement                 | `src/app/actions/checkout.ts` → session Stripe Checkout hébergée                        |
| Paramètres de la session | `src/lib/checkout.ts` (fonction pure, testée) ; la remise est intégrée au prix unitaire |
| Commande payée           | `src/app/api/stripe/webhook/route.ts` → e-mail à l'équipe                               |
| Confirmation client      | `/commande/confirmation?session_id=…`                                                   |
| Pages métier             | `src/data/metiers/*.ts` : une entrée = une page, contenu propre au métier               |
| Guides                   | `src/config/guides.ts` → articles du blog youzoune.com                                  |
| Mesure d'audience        | PostHog, voir `posthog-setup-report.md` (événements, consentement, dashboard)           |

Le navigateur n'envoie jamais de prix : le serveur relit le catalogue et recalcule la remise à
chaque paiement. Il n'y a pas de base de données, Stripe est le registre des commandes.

### Ajouter une page métier

Ajouter une entrée dans le fichier de sa famille (`src/data/metiers/`) : la page, le hub, le
sitemap et le maillage se mettent à jour seuls. Le contenu doit rester propre au métier
(emplacements, moment, phrase, FAQ) pour ne pas être vu comme une page dupliquée.

## Mise en production

1. **Domaine** : créer le projet Vercel, brancher le domaine retenu, renseigner
   `NEXT_PUBLIC_SITE_URL` (lue au build) et `IS_INDEXABLE=true` en production uniquement.
2. **Stripe** : `STRIPE_SECRET_KEY` (live), puis un endpoint webhook
   `https://<domaine>/api/stripe/webhook` sur `checkout.session.completed` et
   `checkout.session.async_payment_succeeded` → `STRIPE_WEBHOOK_SECRET`.
   Dans les réglages Stripe : activer les reçus e-mail clients, le nom public « Youzplate »
   et les moyens de paiement voulus (carte, Apple Pay, Google Pay…).
3. **Resend** : `RESEND_API_KEY`, `ORDER_EMAIL_FROM` (domaine vérifié), `ORDER_EMAIL_TO`.
4. **Google Merchant Center** : déclarer le flux `https://<domaine>/merchant-feed.xml`.
5. **Search Console** : déclarer le domaine et le sitemap `https://<domaine>/sitemap.xml`.
6. **PostHog** : `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` (clé publique `phc_…` du projet Youzplate,
   eu.posthog.com → Project settings), en Production et Preview. Lue au build : redéployer après.
   Pour des erreurs lisibles (source maps) : `POSTHOG_PERSONAL_API_KEY`, clé personnelle avec les
   scopes « Error tracking: Write » et « Organization: Read ». Une clé invalide fait échouer le build.
7. **Vitrine** : renseigner `NEXT_PUBLIC_YOUZPLATE_URL` sur youzoune-vitrine pour que les
   anciennes URLs (`/youzplate`, `/produits/plaque-*`) et les articles renvoient vers la boutique.

## À valider avant le lancement

- [x] **Prix** : 29,90 € l'unité (`UNIT_AMOUNT` dans `catalog.ts`), −10 % dès 2 plaques, −20 %
      dès 5 (`pricing.ts`).
- [x] **TVA** : micro-entreprise en franchise en base, prix nets. La mention `VAT_MENTION`
      (`src/config/site.ts`) est affichée avec les prix et ajoutée en pied des factures Stripe.
      Ne pas activer Stripe Tax.
- [ ] **Médiateur de la consommation** : adhérer à un médiateur agréé puis renseigner
      `CONSUMER_MEDIATOR` dans `src/config/site.ts` (affiché dans les CGV).
- [ ] **Livraison** : pays desservis et délais dans `SHIPPING` (`src/config/site.ts`).

## Plaques physiques

Les plaques imprimées pointent vers `redirect.youzoune.com/plates/<type>/r?…`, servi par le
Strapi historique (`youzoune/strapi`, collection `plates`). Une plaque sans lien renvoie vers
`youzoune.com/setup-plate/<type>/<numéro>` (vitrine), où le client associe sa page. Cette boutique
ne touche pas à ce circuit : elle vend, la vitrine et Strapi configurent et redirigent.
