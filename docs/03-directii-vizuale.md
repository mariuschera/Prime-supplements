# Faza 2 · Direcții vizuale propuse

Mockup-uri statice (homepage + pagină de produs, 390 px): `docs/mockups/directia-1-blackout.html`, `directia-2-lab.html`, `directia-3-flavor.html`. Toate pornesc de la identitatea actuală (alb-negru, „Hardcore sports nutrition”, roșu Prime `#e91d23`, Prime Health pe verde) și folosesc doar imagini din magazin: packshot-urile decupate ale produselor, logo-urile și ședința foto nouă din Files (plajă / exterior, octombrie 2026).

Structura paginilor e aceeași în toate trei (ea vine din cercetare și din brief); diferă tratamentul vizual. Orice direcție alegi, pagina de produs păstrează: galerie + badge-uri, titlu + sub-linie tehnică, rating cu link la recenzii, preț + preț pe porție și per kg, swatch-uri de aromă cu culoare, mărimi cu preț pe porție, mesaj „comandă în X ore și pleacă azi”, acordeoane obligatorii (formula pe porție, ingrediente și alergeni, mod de administrare, tabel nutrițional, avertismente), calculator, comparator, cumpărate împreună, FAQ, recenzii Judge.me, sticky add-to-cart.

## Direcția 1 · BLACKOUT

- **Idee**: identitatea actuală dusă până la capăt. Negru dominant, roșul Prime ca lamă, grain discret, produsul decupat pe fundal tonat după aromă. Energie RAW / Hosstile, disciplină de magazin.
- **Paletă**: fond `#0b0b0c`, suprafață `#141416`, alb cald `#f4f2ee`, roșu `#e91d23`, verde Health `#2fbf71`, galben rating `#f0c417`.
- **Fonturi**: Barlow Condensed 800 italic (titluri, prețuri, butoane) + Barlow 400/500/600 (text). Barlow e deja fontul temei, deci nu adăugăm familii.
- **Motion**: marquee în bara de anunț, reveal la scroll pe titluri, galeria se recolorează după aromă, pulse pe coș. Oprit la `prefers-reduced-motion`.
- **Plus**: cel mai puternic brand, cea mai bună continuitate cu ambalajele (negru + roșu). 
- **Minus**: temele dark convertesc mai greu pe pagini lungi de informație (tabel nutrițional, FAQ); contrastul trebuie ținut strict peste 4,5:1; Prime Health trebuie izolat vizual ca să nu pară „hardcore”.

## Direcția 2 · PRIME LAB

- **Idee**: alb, negru și date. Transparența formulei (Gorilla Mind) devine limbajul vizual: cifre monospace, etichete tehnice, chip-uri statistice, panouri tonate discret după aromă. Roșul doar pentru acțiune și reduceri.
- **Paletă**: fond `#f6f6f4`, suprafață `#ffffff`, cerneală `#101012`, roșu `#e91d23`, verde Health `#1f8a4c` pe `#e4f3ea`, tonuri de aromă pastel pentru panouri.
- **Fonturi**: Archivo variabil (lățime 62–125, greutate 400–900) pentru tot: titluri extinse 900, text normal, etichete înguste; JetBrains Mono 500 pentru cifre, dozaje, coduri. Un singur fișier variabil + un mono.
- **Motion**: minim și precis: count-up pe cifrele din formulă, bare de dozaj care cresc, recolorare panou la aromă. Fără parallax.
- **Plus**: cel mai mare potențial de încredere pentru clientul român care compară prețul pe porție; cel mai bun pentru Prime Health și pentru pagina de produs informațională; cel mai ușor de ținut la Lighthouse 90+.
- **Minus**: mai „rece”; brandul hardcore trebuie susținut prin fotografie (sportivi) și prin benzile negre (hero, newsletter).

## Direcția 3 · FLAVOR DROP

- **Idee**: baza rămâne alb/negru, dar culoarea vine din aromă: fiecare produs aduce panoul lui plin (Cherry roșu, Pineapple Mango galben, Blueberry mov), în stilul Ghost. Tipografie display uriașă, bento colorat pentru obiective, marquee cinetic, colțuri rotunjite, energie de streetwear care leagă MNX de suplimente.
- **Paletă**: alb `#ffffff`, negru `#0a0a0a` + o culoare per aromă (definită pe metaobiect de aromă) + verde Health `#20b35a`.
- **Fonturi**: Big Shoulders Display 900 (titluri, prețuri, marquee) + Work Sans 400–700 (text).
- **Motion**: marquee în hero și în galerie, panoul își schimbă culoarea la aromă (custom property, 400 ms), tubul „sare” în coș, View Transitions între card și produs.
- **Plus**: cea mai „Dribbble 2026”, cea mai bună pentru arome, lansări și social; diferențiere maximă față de Genius Nutrition.
- **Minus**: cere disciplină (culoarea per aromă trebuie definită pentru toate cele ~40 de arome) și imagini decupate curate pentru fiecare variantă; riscul de „prea colorat” pe Prime Health și pe produsele fără aromă.

## Recomandarea mea

**Direcția 2 (Prime Lab) ca bază, cu două împrumuturi din Direcția 3**: panoul de culoare per aromă în galeria produsului și în cardurile cu arome, și bento-ul colorat pentru „Cumpără după obiectiv”. Motivul: obiectivul e 100 de comenzi pe zi, iar pagina de produs cu formula la vedere, prețul pe porție și informațiile obligatorii lizibile este cel mai direct câștig de conversie și de încredere pe piața din România. Direcția 1 rămâne cea mai „brand”, dar o pot folosi ca registru pentru benzile negre (hero, sportivi, newsletter) în interiorul Direcției 2, fără să pierdem lizibilitatea.

Dacă preferi identitatea hardcore înainte de toate, Direcția 1 este alegerea; dacă vrei diferențiere maximă și mizezi pe arome și social, Direcția 3.

## Ce aștept de la tine înainte de Faza 3

1. Direcția aleasă (1, 2, 3 sau combinația recomandată).
2. Confirmare că pot lucra prin Admin API pe copia `193987346807` (deja creată, nepublicată). Opțional, un token Theme Access (Apps → Theme Access) ar permite `shopify theme dev` cu preview live în timp ce lucrez; nu este obligatoriu.
3. Decizii de business: un singur pop-up (theMarketer sau temă), un singur chat pe mobil (WhatsApp sau Inbox), textul exact pentru pragul/ora limită (300 lei, 15:00, L–V).
4. Imagini: ședința foto nouă din Files e suficientă pentru hero, sportivi și lookbook. Dacă vrei imagini generate AI pentru fundaluri de aromă (texturi de fructe, stropi), le pot genera, dar recomand să nu generăm persoane sau produse.


## Decizie (2026-10-22)

Proprietarul a ales **Direcția 3 (Flavor)** și a cerut un nivel de finisare mult mai ridicat, cu prezentare pe desktop și mobil. Rezultatul este mockup-ul Pro descris în `04-directia-3-pro.md` (`mockups/directia-3-pro.html`). Direcțiile 1 și 2 rămân în arhivă.
