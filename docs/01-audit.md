# Faza 1 · Audit tema primesupplements.ro

Data: 21 octombrie 2026. Fără modificări pe tema live. Toate măsurătorile sunt pe site-ul live (tema publicată), toate observațiile de cod sunt pe copia trasă local în acest repo.

## 1. Tema și structura

| Element | Valoare |
|---|---|
| Temă | **Impact 6.7.1** (Maestrooo, Theme Store ID 1190), Online Store 2.0, JSON templates, section groups, theme blocks |
| Tema live | `Impact – SEO fixes 2026-10-12 (Claude, nepublic...)`, ID `193875083639`, rol MAIN |
| Alte teme din cont | Dawn (apr. 2025), Impact (apr. 2025), „TEMA INITIALA NEEDITATA” (sept. 2025), „Copy of Impact – SEO fixes” (13 oct. 2026) |
| **Copia de lucru** | **`Prime Redesign 2026 – Claude (NU PUBLICA)`, ID `193987346807`, nepublicată**, creată 21 oct. 2026 din tema live |
| Fișiere | 282: 11 blocks, 73 sections + 3 section groups, 93 snippets, 30 locales, 48 templates, 3 config, 1 layout |
| Assets mari | `theme.css` 230 KB, `theme.js` 227 KB (module ES, web components), `vendor.min.js` 62 KB, `photoswipe.min.js` 60 KB, `country-flags-2x.png` 479 KB + `country-flags.png` 173 KB, 36 fișiere Poppins + 2 Bebas Neue (woff2) |
| Fonturi setate în temă | Barlow 700 (titluri) + Barlow 400 (text), preîncărcate în `theme.liquid` |
| Fonturi suprascrise | `snippets/fontify-fonts.liquid` forțează cu `!important` Bebas Neue pe toate titlurile și Poppins pe `p, a, li`. Rezultat: trei familii încărcate, Barlow preîncărcat degeaba |
| Setări (settings_schema) | 10 grupuri: Appearance (20), Colors (27), Typography (10), Currency, Animation (6), Color swatch, Product card (11), Cart (6), Social (19), Favicon |
| Paletă actuală | fond `#f0f0f0`, text `#1a1a1a`, buton `#e91d23`, footer `#1a1a1a`, badge `#803cee`, accent checkout galben `#f0c417` |

### Templates
- `templates/index.json`: 25 de secțiuni (vezi §4).
- `templates/product.json` + `product.creatina2.json` (template custom pe creatină) + `product.pre-order.json`.
- 18 template-uri de colecție (`collection.*.json`) aproape identice, diferă doar imaginea din banner.
- Pagini: `page.contact`, `page.despre-noi`, `page.creatina-despre-produs`, `page.faq` (gol, doar main-page), `page.b2b`, `page.thank-you-b2b`.
- `templates/search.bss.b2b.liquid` și `search.bss.bcp.liquid`: rămășițe ale aplicației BSS B2B (nu mai e instalată).
- `templates/robots.txt.liquid` custom.

### Cod custom adăugat de agenție / sesiunile anterioare (de păstrat sau de migrat)
- Snippets SEO: `schema-organization`, `schema-product-enhanced`, `schema-breadcrumb-enhanced`, `schema-collection`, `schema-page`, `schema-article`, `faq-schema-creatina`. Snippet-ul original `microdata-schema` este dezactivat (comentat) în layout.
- `snippets/a11y-fixes.liquid` (corecții de accesibilitate injectate în `<body>`).
- `snippets/fontify-fonts.liquid` (înlocuitor self-hosted pentru aplicația Fontify, dezinstalată).
- CSS inline în `layout/theme.liquid`: contrast Judge.me, Delivery Estimator, bare de dimensiuni, stil BSS B2B.
- `sections/mktr_custom_app.liquid` (theMarketer, dezactivată în header group; app embed-ul `mktr_core` este cel activ).
- `sections/ss-video-grid-socials-3.liquid` (secțiune din Section Store, 46 KB, grid video social).
- `assets/bss-custom.css/js`, `assets/firebase-config.js`, `assets/firebase-messaging-sw.js` (fișiere de 1 byte, rămășițe de la o aplicație de push).
- `config/settings_data.json` → `platform_customizations.custom_css` (stil roșu pe acordeonul de descriere).

## 2. Aplicații și integrări

Instalate (Admin API): Flow, Search & Discovery, Bundles (Shopify), Judge.me Reviews, Delivery Estimator (CodeRagon), Dondy WhatsApp, Pandectes GDPR, Simprosys Google Shopping Feed, UpPromote Affiliate, theMarketer, Shopify Inbox/Messaging, Microsoft Clarity, Ablestar Link Manager, Fluxsales, Primesupplements App (două instalări: una custom „app developer” și `primesupplements-admin-actions` de la FLUXSALES), Product Migration, Knowledge Base, Shopify Claude Connector.

App embeds active în `settings_data.json` (toate rămân neatinse): Delivery Estimator, Judge.me core, Dondy WhatsApp, Pandectes banner, Simprosys, UpPromote (core, referral, message bar), theMarketer `mktr_core`, Clarity, Pop Convert (aplicația nu mai apare instalată, embed-ul rămâne orfan), Shopify Inbox chat. Fontify: dezactivat.

App blocks în template-uri (se mută în noua structură și se verifică): Judge.me `preview_badge` (produs), `review_widget` (produs, setarea `review_data: sample_data` – de verificat în Judge.me că widget-ul afișează recenziile reale), `featured_carousel` (homepage); Delivery Estimator `app-block` (produs).

Nu apar ca aplicații de temă: Google & YouTube (canal de vânzare, nu atinge tema), NETOPIA (gateway de plată, doar în checkout). Fluxsales și Primesupplements App nu au cod în temă: nu se ating.

Tracking verificat pe live: theMarketer (`mktr.view_product`, `add_to_cart`), Google tag `G-DX0F0N485Q` + Ads `AW-16853658606`, Meta Pixel (`fbevents.js` încărcat de două ori), TikTok, Clarity, Shopify Web Pixels. Acestea devin lista de verificare la QA.

## 3. Baseline Lighthouse (live, 21 oct. 2026, Lighthouse 13.5, Chromium headless)

| Pagină | Perf | A11y | Best Pr. | SEO | LCP | CLS | TBT | Speed Index | Cereri | Total | JS | Imagini | Terți |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Home · mobil | **33** | 94 | 73 | 100 | **6,1 s** | 0,002 | **4 210 ms** | 10,3 s | 454 | 3,9 MB | 1,46 MB | 959 KB | 1,56 MB |
| Home · desktop | 79 | 94 | 73 | 100 | 1,4 s | 0,02 | 180 ms | 6,8 s | 455 | 3,8 MB | 1,46 MB | 839 KB | 1,67 MB |
| Colecție Pre-Workout · mobil | **38** | 97 | 73 | 100 | **7,9 s** | 0,049 | 1 680 ms | 7,2 s | 447 | 3,5 MB | 1,66 MB | 369 KB | 1,73 MB |
| Colecție · desktop | 81 | 97 | 73 | 100 | 2,3 s | 0,002 | 20 ms | 2,6 s | 446 | 3,6 MB | 1,63 MB | 504 KB | 1,82 MB |
| Produs Prime Whey 1 kg · mobil | **54** | 100 | 73 | 100 | 3,3 s | 0,014 | **2 480 ms** | 6,8 s | 465 | 3,7 MB | 1,63 MB | 374 KB | 1,81 MB |
| Produs · desktop | 88 | 100 | 73 | 100 | 0,8 s | 0,031 | 120 ms | 6,2 s | 480 | 3,8 MB | 1,63 MB | 499 KB | 1,92 MB |

INP nu se poate măsura în laborator; TBT (proxy) e de 4,2 s pe homepage mobil, deci INP real e aproape sigur peste 200 ms. Rapoartele HTML/JSON sunt în `docs/lighthouse-before/`.

Ce trage în jos (home mobil):
- 454 de cereri și 3,9 MB; 125 de scripturi (1,46 MB), din care terți 194 cereri / 1,56 MB: `gtag.js` de două ori (194 + 166 KB), `fbevents.js` de două ori (115 + 115 KB), bundle-uri `checkout-web` preîncărcate (~400 KB), Web Pixels (83 KB), Dondy chat (70 KB+), Delivery Estimator (45 KB), Judge.me, Clarity, UpPromote, Pandectes, imaginea pop-up-ului theMarketer (97 KB).
- Tema: `theme.js` 227 KB + `vendor.min.js` 62 KB încărcate pe orice pagină, `theme.css` 230 KB.
- Trei familii de fonturi, 11 fișiere.
- Imaginea hero mobil (`header-mobile.jpg`, 81 KB) nu are `fetchpriority="high"`; pop-up-ul newsletter încarcă o imagine de 1080 px la 5 s după încărcare.
- Best Practices 73 pe toate paginile: cookie-uri terțe, erori în consolă, „inspector issues” (toate de la aplicații).
- Accesibilitate: `aria-dialog-name` (homepage, un dialog fără nume) și `color-contrast` (home, colecție).

## 4. Probleme de UX, design, conținut, SEO, accesibilitate

### Homepage (`templates/index.json`, 25 de secțiuni)
1. **„Reduceri” → „Vezi toate” duce la `cele-mai-vandute`**: secțiunea `featured_collection_bt96pP` are `collection: cele-mai-vandute` și `link_url` gol, deci linkul moștenește colecția greșită. Fix: `collection: reduceri`.
2. **Șapte carusele de produse una după alta** (NOU Haine MNX, Pudre proteice, Prime Health, Pre Workout, Lansate recent, Cele mai vândute, Reduceri) + un collection-list + un media-grid. Homepage-ul are ~25 de secțiuni și nu spune nimic despre obiective, livrare sau de ce Prime.
3. Slideshow: hero cu un singur mesaj bun („Hardcore sports nutrition”), dar al doilea slide e un placeholder gol („Slide title / Tell your story”) rămas în JSON (nu se afișează, dar e balast).
4. Texte fără diacritice și cu greșeli: FAQ (5 întrebări și răspunsuri), bloc Combat PRO 2.0 („fara cofeina”, „imbuinatirea”), citatul din Press, „Inainte/dupa”, „Nutritie zilnica pentru imunitate, digestie si vitalitate”.
5. **Program de suport greșit**: FAQ afișează „Luni până Vineri: 8:00 - 18:00”. Corect: L–V 10:00–18:00, S 10:00–16:00.
6. Secțiunea `before-after-image` („Feedback de la sportivii de performanță”, înainte/după) sugerează efecte fizice; se reconstruiește ca „Sportivii Prime” fără promisiuni de rezultate (Reg. 1924/2006).
7. Blocul de încredere `text-with-icons` din footer group este dezactivat; textele lui sunt și greșite („Asistență clienți 24/7”, „Cumpărături securizate prin Shopify Payments”, plata este NETOPIA).
8. Pe prima vizită pe mobil se pot suprapune: pop-up newsletter (după 5 s, cu imagine „Crema de orez back in stock”), pop-up theMarketer, bara UpPromote, banner Pandectes, bula Dondy WhatsApp și bula Shopify Inbox. Două chat-uri simultan.
9. Secțiunea `apps` 1773543102ef58f575 e goală.

### Header / navigație
10. Mega-meniul e un drawer cu 14 categorii plate; nu există axa „obiectiv” și nici game (Prime / Prime Health / MNX / Pachete). „Logare cont” apare în meniul principal, „Îmbrăcăminte” apare de două ori (nivel 1 și în Shop).
11. Două meniuri aproape identice (`main-menu` și `main-menu-desktop`), de întreținut în dublu.
12. Selector de limbă și de țară activat în header și footer deși magazinul are o singură limbă publică și o singură piață; `country-flags.css` + PNG de 650 KB sunt încărcate degeaba.
13. Bara de anunț are două mesaje în mod „scrolling”; al treilea (campanie din noiembrie) e dezactivat. Nu există mesajul „comandă până la 15:00”.

### Colecție
14. Același banner foto (HILA_…jpg) și același „produs vândut” (baton proteic căpșuni) pe toate cele 18 template-uri de colecție; promoția „Nitrox NO-STIM” apare pe poziția 4 în orice colecție, inclusiv haine.
15. Filtrele Search & Discovery există (disponibilitate, preț, tip, `custom.cantitate`), dar nu există filtre pe aromă, obiectiv sau „cu/fără cofeină”. `custom.aroma` e completat doar la 8 din 50 de produse.
16. Carduri fără alegerea aromei, fără preț pe porție; badge-urile: doar „Reducere”/„Epuizat”.
17. Textul SEO de colecție (`rich_text` cu `collection.metafields.custom.seo_text`) este dezactivat.

### Produs
18. **„Economisește 0,00 lei”**: `snippets/product-badges.liquid` decide afișarea după `product.compare_at_price > product.price`, dar calculează suma din `variant` (care poate avea `compare_at_price` egal cu prețul). Fix: condiția și suma se calculează amândouă pe variantă și badge-ul se ascunde când economia e 0.
19. Metafield-urile există și sunt bine completate (pe 50 de produse de supliment: `beneficii_cheie` 50/50, `despre_produs` 50/50, `detalii_produs` 50/50, `ingrediente` 46/50, `short_description` 50/50, `seo_produs` 38/50). Tema le pune în 4 tab-uri sub descriere, fără tabel nutrițional structurat, fără alergeni evidențiați, fără preț pe porție / per kg. Metafield-urile standard Shopify (`shopify.flavor`, `detailed-ingredients`, `dietary-preferences`) sunt definite, dar goale.
20. Blocurile `rating`, `vendor`, `sku` sunt dezactivate; „Produs în Uniunea Europeană” este un bloc `liquid` cu imagine hardcodată.
21. Sub produs: related, Judge.me, recent vizualizate, Cele mai vândute, scrolling text, collection list, SEO text, o secțiune apps goală: 10 secțiuni, pagina e lungă și repetitivă.
22. „Supliment alimentar” și avertismentele standard apar în descriere (bine), dar nu într-un loc fix, vizibil înainte de cumpărare.
23. Imagini: 173 din 538 de imagini de produs au 2 400–4 000 px lățime. Cardurile cer `srcset` până la 1 800 px, iar pe colecție apar candidați de 3 500–4 000 px (imaginea de bază e cerută la lățimea nativă).

### Texte RO/EN
24. `locales/ro.json` este complet (318 chei, zero texte în engleză). **Toate textele mixte vin din Judge.me**: „No reviews” (preview badge), „Let customers speak for us” și „from 446 reviews” (featured carousel). Se schimbă din Judge.me → Settings → Reviews Widget → *Widget text / Translations* (și pentru carusel, *Featured carousel text*). În temă rămâne doar „Nicio recenzie” din `snippets/product-rating.liquid`.

### SEO
25. Un singur H1 pe pagină: corect pe home, colecție, produs.
26. JSON-LD static: Organization (graph), FAQPage (home), Product + BreadcrumbList (produs). Judge.me injectează separat rating-ul; la QA verificăm să nu rezulte două `Product` cu `aggregateRating`.
27. Canonical și meta description: prezente, cu titlul homepage suprascris în `theme.liquid`.
28. Colecțiile utilitare sunt pe `noindex` (cele-mai-vandute, lansate-recent, reduceri, 11-tva, all): corect.

### Accesibilitate
29. Un dialog fără nume (`aria-dialog-name`) pe homepage, contraste sub 4,5:1 pe home și colecție (text `text-subdued` pe `#f0f0f0`). Pe produs scor 100.

### Coș
30. Cart drawer activ (Impact `cart-drawer` cu bară de livrare gratuită la 300 lei), dar secțiunea din `overlay-group` e marcată `disabled` în JSON: funcționează doar prin fallback-ul temei. Nu există upsell, iconițele de plată sunt cele generice Shopify.

## 5. Recomandare: refacem în profunzime tema Impact (nu migrăm pe Horizon)

Motive:
- Impact 6.7.1 e Online Store 2.0 complet: JSON templates, section groups, theme blocks, web components native, fără jQuery. Tot ce cere brief-ul (mega meniu pe 3 axe, căutare predictivă, cart drawer cu progres, sticky ATC, quick add) are deja infrastructură în temă.
- Toate cele 13 app embeds și 4 app blocks sunt deja mapate; pe Horizon ar trebui reconfigurate și retestate aplicație cu aplicație (Judge.me, theMarketer, UpPromote, Delivery Estimator, Pandectes).
- Codul SEO și de accesibilitate adăugat recent (schema-*, a11y-fixes, robots) se păstrează ca atare.
- Riscul: Horizon are alt model de blocuri (theme blocks only) și ar însemna rescrierea tuturor secțiunilor custom, cu 2–3× efort și fără câștig de conversie în sine.
- Costul acceptat: `theme.js` (227 KB) și `theme.css` (230 KB) rămân globale. Secțiunile noi vin cu CSS/JS propriu, încărcat per secțiune, iar din cele globale scoatem ce nu se folosește (country flags, fonturi duplicate, BSS, firebase).

Plan de implementare (Fazele 3–4) pe copia `193987346807`: tokens în `css-variables.liquid` + settings_schema, secțiuni noi `prime-*`, template-uri noi (quiz, stack builder, landing obiective, sportivi, hub educațional, 404), curățare homepage la ~12 secțiuni, PDP reconstruită pe metafield-urile existente.

## 6. Ce ține de temă vs. ce schimbi tu în afara temei

| Problemă | Unde se rezolvă |
|---|---|
| „No reviews”, „Let customers speak for us”, „from 446 reviews” | Judge.me admin → Settings → Reviews widget → Widget text / Translations; Featured carousel → texte |
| `review_data: sample_data` pe widget-ul de recenzii | Judge.me / Theme Editor: setarea blocului „Review widget” pe produs |
| Program suport 8:00–18:00 | Temă (secțiunea FAQ) + pagina Contact + Delivery Estimator (textul aplicației, dacă îl menționează) |
| Pop-up theMarketer + pop-up newsletter temă + Pop Convert orfan | Decizie: păstrăm un singur pop-up (recomand theMarketer, pentru că alimentează automatizările) și dezactivăm pe cel din temă; Pop Convert embed se poate șterge dacă aplicația nu mai e folosită |
| Două chat-uri (Dondy WhatsApp + Shopify Inbox) | Decizie de business: păstrăm unul pe mobil |
| `gtag.js` și `fbevents.js` încărcate de două ori | Google & YouTube channel + Simprosys + Meta channel + pixel manual: se verifică în Settings → Customer events ce pixel e dublat |
| Filtre pe aromă / obiectiv / cofeină | Search & Discovery + completarea metafield-urilor `custom.aroma`, `shopify.flavor`; tema afișează ce există |
| Imagini 4 000 px | Tema cere dimensiuni corecte prin `srcset`/`sizes`; opțional, re-upload la 2 048 px pentru spațiu |
