# Jurnal Prime Supplements – ce am lucrat cu Claude

Fiecare sesiune adaugă aici, pe scurt, ce a schimbat (data, zona, ce s-a făcut). Raportul lunar din ziua 2 citește acest fișier, istoricul git și sesiunile Claude.

## 2026-10-12 – 2026-10-19

### Site și SEO
- 12–13.10: audit SEO complet; titluri și meta descrieri noi pentru produse, colecții și articole; tipuri de produs, alt text la imagini, descrieri de colecții.
- 12–16.10: temă optimizată (date structurate, titluri, og:image, noindex, viteză mobil); tema optimizată a fost publicată.
- 13–15.10: curățenie blog (121 de articole reparate, duplicate scoase, redirecționări 301), pagini despre noi/contact/autor, politici, meniuri.
- 15–16.10: program SEO pentru top 48 de produse și 10 colecții; Combat Pro și pre-workout; batoane proteice.
- 18.10: cele 12 pachete din colecția Reduceri – titluri SEO, meta descrieri, descrieri extinse cu întrebări frecvente, linkuri interne și articole recomandate; pagina colecției Reduceri optimizată.

### Prețuri, oferte și pachete
- 12 pachete Prime (Reduceri) cu 15–21% reducere, ca pachete Shopify native (se desfac pe SKU-urile reale la facturare în Oblio – verificat).
- 18.10: 48 de coduri de reducere inactive de peste 90 de zile – 43 șterse, 5 reactivate (axc10, KARINA10, ANDU10, matei10, CLYEN); coduri peste 20% aduse la maximum 20%; 3 coduri de credit expirate șterse.

### Checkout
- 19.10: adresa de e-mail devine obligatorie la comandă (înainte: telefon sau e-mail).
- 19.10: bara „livrare gratuită peste 300 lei” din coș – texte noi: „Mai ai doar X până la livrare gratuită 🚚” și „Felicitări, ai livrare gratuită! 🎉” (verificat pe site).
- 19.10: analiză checkout-uri abandonate (50 în 3–19.10, ~11.200 lei; doar 28% abonați la e-mail).

### E-mail (theMarketer / Shopify)
- 19–21.10: coș abandonat (theMarketer): fluxul vechi oprit, înlocuit cu „Cart abandonment 2026”: e-mailul 2 nou („Bine de știut înainte să comanzi”, fără „Ultima șansă”, plus 3 produse pentru livrarea gratuită), salut fără prenume gol („Salut!”), fraza falsă „au împachetat deja” înlocuită cu „Produsele alese te așteaptă în coș”, filtru vechi corectat.
- 15–16.10: audit theMarketer; 7 automatizări puse pe pauză (72% din e-mailurile automate, fără comenzi), păstrate Welcome și Coș abandonat; 3.080 de abonați sincronizați din Shopify; newsletter săptămânal de duminică.

### Social media (Zernio: Facebook + Instagram)
- 18.10: Zernio conectat la Facebook și Instagram.
- 18.10: calendar 19.10–17.11: 30 de postări Facebook + 20 Instagram la 18:00, stil alb premium (prezentări de produs, pentru cine e/nu e, rețete, blog, voturi, pachete, haine Prime).

### Afiliați / sportivi
- 18.10: automatizare lunară pentru afiliați (zilele 2–4): raport personal, kit de poze feed + story (7 produse), coaching pentru cei sub 3.000 lei; listă în Google Sheets (74 de afiliați).
- 18.10: fost angajat (Nicolas10) șters din listă, theMarketer și Shopify.

### Rapoarte și automatizări
- 19.10: raport lunar „vânzări fără reduceri” (ziua 1, 08:47) către Marius, Adelina, Ovidiu.
- 19.10: raport lunar „ce am lucrat” (ziua 2) către aceiași.
- Statistica 13–19.10 față de media pe 90 de zile: comenzi totale +37%, comenzi fără cod +36%, vânzări fără cod +53%, comenzi din Google +38%.

### Reclame (Google Ads / Meta Ads)
- În așteptare: conectare Windsor.ai (date doar citire) pentru Google Ads, Meta Ads, Search Console și GA4.

## 2026-10-21 – 2026-10-22 – Redesign temă (Faza 1–2)

### Redesign (folderul `redesign-2026/`)
- 21.10: copie de lucru a temei live creată în Shopify: „Prime Redesign 2026 – Claude (NU PUBLICA)”, ID 193987346807, nepublicată; tema live nu a fost atinsă. Tema trasă local și pusă sub git (`redesign-2026/`).
- 21.10: audit complet al temei (`redesign-2026/docs/01-audit.md`): Impact 6.7.1, 19 aplicații, 13 app embeds; Lighthouse de referință mobil: homepage 33, colecție 38, produs 54 (`docs/lighthouse-before/`); cauze: 450+ cereri, 1,5 MB scripturi terțe, gtag și Meta Pixel de două ori, trei familii de fonturi. Recomandare: refacere în profunzime pe Impact, nu migrare pe Horizon.
- 21.10: cercetare pe 8 site-uri de inspirație + trenduri 2026 (`docs/02-cercetare-inspiratie.md`); 3 direcții vizuale cu mockup-uri mobil (`docs/03-directii-vizuale.md`, `docs/mockups/`).
- 21.10: proprietarul a ales Direcția 3 „Flavor Drop” și a cerut o versiune mult mai profesionistă, cu prezentare pe desktop și mobil. În lucru: mockup de înaltă fidelitate (homepage, produs, colecție, meniu, coș, quiz) pe date și poze reale din magazin.
