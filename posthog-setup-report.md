<wizard-report>
# PostHog post-wizard report

PostHog est branché sur toute la boutique Youzplate (projet « Default project » de l'organisation Youzplate, hébergement UE) :

- **Navigateur** : initialisation dans `src/instrumentation-client.ts` (Next 15.3+), passage par le proxy `/ingest` déclaré dans `next.config.ts` (les bloqueurs de pub laissent passer), autocapture, pages vues, web vitals, exceptions et replays activés.
- **Consentement (RGPD/CNIL)** : bandeau `src/components/cookie-consent.tsx`, repris de la vitrine. Avant un choix ou après un refus, la mesure est anonyme et sans cookie (`cookieless_mode: 'on_reject'`, mode activé côté projet) ; cookie et enregistrement de session uniquement après « Accepter ». Bouton « Gérer les cookies » dans le pied de page et la politique de confidentialité, mise à jour (PostHog ajouté aux sous-traitants).
- **Serveur** : `src/lib/posthog-server.ts` (posthog-node, envoi attendu avant la fin de la requête). L'action de paiement et le webhook Stripe capturent leurs événements sous le même identifiant que le navigateur : l'identifiant PostHog part dans le formulaire du panier, puis dans les métadonnées de la session Stripe, que le webhook relit (`src/lib/posthog-identity.ts`).
- **Ventes** : `order_completed` est envoyé par le webhook Stripe, donc compté même si le client ferme l'onglet ; UUID stable pour ne pas compter deux fois une relivraison Stripe. Les personnes qui commandent reçoivent `has_ordered` et `first_order_at`.
- **Erreurs** : `onRequestError` (`src/instrumentation.ts`) pour les erreurs serveur, `src/app/error.tsx` pour les erreurs d'affichage côté navigateur, exceptions de l'action de paiement et du webhook.
- **Aucune donnée personnelle** dans les événements : ni e-mail, ni nom, ni adresse, ni lien saisi dans l'outil QR code. L'e-mail affiché sur la page de confirmation est exclu des replays (`ph-no-capture`).

| Événement                   | Description                                                                      | Fichier                                                           |
| --------------------------- | -------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| `platform_selected`         | Choix d'une plateforme dans le hero de l'accueil                                 | `src/components/hero-picker.tsx`                                  |
| `product_view_changed`      | Vue « En situation » / « De face » d'une fiche produit                           | `src/components/product-gallery.tsx`                              |
| `product_quantity_selected` | Choix de la quantité (1, 2, 5) dans le bloc d'achat                              | `src/components/buy-box.tsx`                                      |
| `product_added_to_cart`     | Ajout au panier, avec `source` : `buy_box`, `quick_add`, `bundle`, `cart_upsell` | `buy-box.tsx`, `quick-add.tsx`, `add-bundle.tsx`, `cart-view.tsx` |
| `cart_quantity_changed`     | Quantité modifiée dans le panier                                                 | `src/components/cart-view.tsx`                                    |
| `product_removed_from_cart` | Plaque retirée du panier                                                         | `src/components/cart-view.tsx`                                    |
| `checkout_started`          | Clic sur « Paiement sécurisé »                                                   | `src/components/cart-view.tsx`                                    |
| `checkout_session_created`  | Session Stripe créée (serveur)                                                   | `src/app/actions/checkout.ts`                                     |
| `checkout_failed`           | Le paiement n'a pas pu démarrer, avec `reason` (serveur)                         | `src/app/actions/checkout.ts`                                     |
| `order_completed`           | Commande payée, avec `revenue` en € (webhook Stripe)                             | `src/app/api/stripe/webhook/route.ts`                             |
| `qr_code_generated`         | QR code créé avec l'outil gratuit                                                | `src/components/qr-generator.tsx`                                 |
| `qr_code_downloaded`        | QR code téléchargé (`format` : png ou svg)                                       | `src/components/qr-generator.tsx`                                 |
| `qr_poster_printed`         | Affiche A5 imprimée                                                              | `src/components/qr-generator.tsx`                                 |
| `nav_menu_opened`           | Ouverture du méga menu (panneau, survol ou clic) ou du menu mobile               | `mega-menu.tsx`, `mobile-menu.tsx`                                |
| `cookie_consent_decided`    | Choix dans le bandeau cookies (`accepted`)                                       | `src/components/cookie-consent.tsx`                               |

Toutes les étapes du panier portent l'état du panier : `cart_quantity`, `cart_value` (€), `cart_discount`, `volume_tier`.

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- Dashboard : [Analytics basics (wizard)](https://eu.posthog.com/project/317737/dashboard/1049573)
- [Tunnel d'achat (wizard)](https://eu.posthog.com/project/317737/insights/I4twOqcx)
- [Chiffre d'affaires et commandes payées (wizard)](https://eu.posthog.com/project/317737/insights/jLv0uX3R)
- [Ajouts au panier par source (wizard)](https://eu.posthog.com/project/317737/insights/hKdxxfLU)
- [Échecs de paiement par raison (wizard)](https://eu.posthog.com/project/317737/insights/msqK3tWY)
- [Outil QR code gratuit (wizard)](https://eu.posthog.com/project/317737/insights/RaRYmGjG)

## Verify before merging

- [ ] Run a full production build (the wizard only verified the files it touched) and fix any lint or type errors introduced by the generated code.
- [ ] Run the test suite — call sites that were rewritten or instrumented may need updated mocks or fixtures.
- [ ] Renseigner `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` (clé publique `phc_…` du projet) dans Vercel, pour Production et Preview, puis redéployer : la variable est lue au build.
- [ ] Wire source-map upload (`posthog-cli sourcemap` or your bundler's upload step) into CI so production stack traces de-minify.

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
