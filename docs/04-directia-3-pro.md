# Direcția 3 Pro · mockup de înaltă fidelitate (desktop + mobil)

Fișier: `docs/mockups/directia-3-pro.html` (se deschide în browser; imaginile sunt încorporate). Capturi: `docs/screenshots-d3-pro/` (homepage, produs, colecție, meniu, coș, quiz, fiecare pe desktop 1440 și mobil 390).

Bara de sus a prezentării schimbă pagina (Homepage · Produs · Colecție · Meniu + căutare · Coș · Quiz) și dispozitivul (Ambele · Desktop 1440 · Mobil 390). Același markup se montează în ambele rame; layout-ul răspunde la lățimea ramei (container queries), exact cum va răspunde tema la lățimea ecranului.

## Ce e real și ce e ilustrativ

| Real (din magazin) | Ilustrativ (de înlocuit în Faza 4) |
|---|---|
| Toate prețurile, porțiile, aromele, stocurile (Nitrox 3D 190 lei · 25 porții · 4 arome; Creapure® 500 g 180 lei / 300 g 110 lei; Prime Whey 1 kg 200 lei · 7 arome; EAA 175 lei (185); No-Stim 205 lei; Omega-3 65; Magneziu 70 (90); D3+K2 75, stoc epuizat; pachete 455 (540) și 309 (370)) | Textele recenziilor (numele, conținutul) și procentul „96 % recomandă”: în temă vin din Judge.me |
| Formula Nitrox 3D (6 000 mg citrulină, 4 420 mg AAKG, 2 000 mg tri-creatină citrat, 2 000 mg beta-alanină, 1 500 mg taurină, 1 000 mg tirozină, 400 mg teanină, 200 mg cofeină, 6 mg piper negru), lista de ingrediente, modul de administrare, avertismentele: din metafield-urile `custom.ingrediente`, `custom.detalii_produs`, `custom.beneficii_cheie` | Citatele sportivilor: descriu rutina și gustul, fără efecte; numele lipsesc până confirmi consimțământul |
| Ratingurile și numărul de recenzii per produs (`reviews.rating`, `reviews.rating_count`) | Numărul de produse pe obiectiv din bento (14, 9…) |
| Pozele: ședința din sală (Files), cele 4 poze trimise de tine, cut-out-urile de produs pe aromă | Culorile per aromă (propuse; se definesc în metaobiectul de aromă) |
| Mesajul de expediere: calculat în timp real din ora curentă, L–V, limită 15:00 | Numărul de produse din filtre și textul SEO al colecției |

## Paginile

### Homepage
1. Bară de anunț în marquee (prag 300 lei, ora limită, ramburs/card, 400+ recenzii, WhatsApp).
2. Header: logo, meniu pe trei axe (Suplimente cu mega meniu: categorii cu miniaturi, obiective, game + card promo pe aroma lunii), Obiective, Prime Health (verde), MNX Wear, Pachete, Ghiduri; căutare, cont, coș cu contor. Pe mobil: burger, logo, căutare, cont, coș + bară de navigare jos (Acasă · Shop · Caută · Quiz · Coș).
3. Hero în culoarea aromei: H1 „Hardcore sports nutrition”, un singur CTA („Vezi bestsellerele”), rating; în dreapta produsul lunii (Nitrox 3D) cu text cinetic în fundal, card cu preț, preț pe porție, bulinele de aromă (schimbă culoarea panoului și tubul) și „Adaugă în coș”.
4. Bandă de încredere: pleacă azi până la 15:00 · gratuit peste 300 lei · ramburs sau card · produs în UE.
5. „Cumpără după obiectiv”: bento cu 7 tile-uri (masă, slăbire, forță, energie, recuperare, sănătate zilnică, pachete), fiecare cu cut-out de produs; pe mobil 2 coloane.
6. Bestsellers: 4 carduri cu badge, rating, swatch-uri de aromă care schimbă imaginea și fundalul cardului, preț + preț pe porție, „Adaugă în coș” (toast + coș).
7. „Formula la vedere”: bandă neagră cu dozajele reale ale Nitrox 3D ca bare, poză din sală și 4 cifre (Creapure®, UE, 400+, 15:00).
8. Pachete: Starter Forță 455 lei, Pre-Workout Power 309 lei, cu „prețul produselor cumpărate separat” (nu „reducere”, ca să nu intrăm în Omnibus) + card Stack builder.
9. Bandă Nitrox No-Stim (poza ta cu Ice Blueberry) pe panou albastru, cu cele 3 dozaje principale.
10. Sportivii Prime: 3 carduri foto cu citate despre rutină și gust, stack-ul fiecăruia.
11. Prime Health: univers verde, text, poză (Instant Oats + Ashwagandha), 3 produse (D3+K2 arată „Stoc epuizat · anunță-mă”).
12. MNX & Prime Wear: lookbook 3 tile-uri (hanorac Prime Squad, maiou, hoodie MNX).
13. Recenzii: 4,9 mare + 3 recenzii cu poze (Judge.me).
14. Ghiduri: 3 articole reale din blog.
15. Bandă quiz cu poză din sală + newsletter (10 % prima comandă) + footer complet (program, firmă, ANPC SAL/SOL, politici, disclaimer).

### Pagina de produs (Nitrox 3D, Cherry)
Breadcrumb; galerie pe panou colorat după aromă, cu text cinetic, badge-uri Nou/Video, zoom, miniaturi (4 arome + poză lifestyle + video); titlu, sub-linie cu dozaje, rating cu link, „În stoc · pleacă azi”; preț + preț pe porție și per kg + TVA; 4 cifre cheie; aromă ca tile-uri cu imaginea tubului, numele românesc și stocul; mărime 500 g sau Pachet Power (−61 lei față de separat); cantitate + „Adaugă în coș”; mesaj „Comandă în următoarele X h Y min și coletul pleacă azi”; 3 garanții (ramburs/card, retur 14 zile, WhatsApp); „Merge cu Creapure®”.
Sub buy-box: „Ce conține o porție” (9 ingrediente cu mg și bare), acordeoane obligatorii (ingrediente și alergeni, mod de administrare, tabel nutrițional, avertismente cu „conținut ridicat de cofeină”, livrare și retur), calculator de toleranță la cofeină + câte săptămâni ajunge tubul, comparator Nitrox 3D vs No-Stim, „Cumpărate des împreună” cu bife și total, FAQ, recenzii Judge.me cu histogramă și poze, recomandări. Pe mobil, bara „Adaugă în coș” rămâne fixă jos.

### Colecție (Pre-workout)
Banner editorial negru cu poză, 5 link-uri rapide (toate / cu cofeină / fără cofeină / shoturi / pachete); bară cu număr de produse, buton „Filtre (2)” pe mobil, sortare; chips cu filtrele active; coloană de filtre pe desktop (obiectiv, cofeină, aromă cu buline, preț, disponibilitate, format); grilă de carduri cu swatch-uri și preț pe porție + un tile editorial (ghid); „Încarcă mai multe” cu progres; text SEO cu avertismentele standard.

### Meniu + căutare
Desktop: mega meniul „Suplimente” deschis (categorii cu miniaturi · obiective · game · promo). Mobil: sertar cu tab-uri Categorii / Obiective / Game, card quiz, program WhatsApp. Căutarea predictivă (apasă pe lupă): sugestii, produse cu preț și preț pe porție, colecții și ghiduri.

### Coș
Drawer cu bară de progres spre 300 lei (textul se schimbă când pragul e atins), linii cu cantitate (totalul se recalculează), upsell „Completează stack-ul” cu adăugare dintr-un click, mesajul de expediere, subtotal, „Finalizează comanda” (checkout-ul rămâne al Shopify), iconițele de plată: ramburs, card Netopia, Visa, Mastercard.

### Quiz
4 pași (obiectiv, nivel, cofeină, buget) cu progres → stack recomandat (Prime Whey 1 kg + Creapure® 300 g + No-Stim, 469 lei cu preț de pachet) și „Adaugă stack-ul în coș”. Mențiunile folosite sunt doar cele autorizate (proteinele contribuie la creșterea masei musculare; creatina crește performanța fizică la 3 g/zi).

## Decizii de conformitate luate în mockup
- Reducerile afișează „cel mai mic preț din ultimele 30 de zile” (Omnibus); la pachete se afișează „prețul produselor cumpărate separat”, nu o reducere.
- Citatele sportivilor nu conțin efecte („pompare”, „focus”); vechiul citat Combat 2.0 a fost înlocuit.
- „Supliment alimentar”, „conținut ridicat de cofeină”, avertismentele standard și cantitatea netă sunt vizibile înainte de cumpărare.
- Fără mențiuni de sănătate neautorizate în textele noi; Prime Health folosește doar formulări neutre.

## Ce ai de făcut tu
1. Confirmă că poți folosi pozele sportivilor din ședința din sală pe site (consimțământ) și dă-mi numele pentru citate, dacă vrei nume reale.
2. Alege produsul lunii pentru hero (acum: Nitrox 3D Cherry) și culorile per aromă dacă vrei altele decât cele propuse.
3. Un videoclip scurt (5–8 s) cu shake-ul sau cu antrenament pentru galeria produsului și hero (opțional).
4. Textul exact al politicii de retur (14 zile pentru produse sigilate) și al garanțiilor afișate lângă buton.

## Următorul pas (Faza 3–4)
Construiesc în tema copie `193987346807` sistemul de design (tokens din Theme settings), apoi secțiunile `prime-*` pentru fiecare bloc de mai sus, cu schema completă în Theme Editor, și template-urile noi (quiz, stack builder, obiective, sportivi, hub, 404). Ordinea: header + mega meniu + căutare → homepage → PDP → colecție → coș → pagini noi → QA + Lighthouse.
