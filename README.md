# Rinse Bommerson — Photography

Productie-klare website voor **Rinse Bommerson**: brandfotografie & visuele strategie voor
professionals en mkb. Gebouwd met Next.js 14 (App Router), TypeScript en Tailwind CSS.

> _Meer dan foto's. Een visuele strategie die je groei laat zien — voordat je een woord hebt gezegd._

---

## Designplan

Het merk is bewust monochroom en grotesk (zie de logo's). De site bouwt daarop voort met een
**redactionele synthese**: warme, afgestemde neutralen + één conceptueel geladen signaalkleur.

### Kleurenpalet

| Naam | Hex | Rol |
|------|-----|-----|
| **Papier** | `#F4F1EA` | Warme krantenwit-achtergrond (geen puur wit) |
| **Inkt** | `#16181C` | Koele bijna-zwart voor tekst & donkere secties |
| **Signaal** | `#D6321F` | Accent: CTA's, links, actieve filter, signatuur — staat voor "gezien worden" |
| **Steen** | `#8C887E` | Bijschriften, meta, hairlines |
| **Wolk** | `#EAE6DC` | Kaarten & subtiele sectiewissels |

De signaalkleur wordt bewust spaarzaam gebruikt en domineert alleen op het afsluitende
conversiemoment. Bodytekst is altijd Inkt-op-Papier (hoog contrast, WCAG AA).

### Typografie

- **Archivo** (Google Fonts, variabel) — display, koppen, navigatie, knoppen, labels. Sluit aan op
  de zware grotesk van het logo.
- **Newsreader** (Google Fonts, serif + italic) — lopende tekst, lede-paragrafen en quotes. Geeft
  het redactionele, tijdloze magazine-gevoel.

### Layout & signatuur

- Asymmetrisch redactioneel grid met een **inhoudsopgave-motief** (`01 — DE KLOOF`).
- **Signature element "Het Kader"**: hoekhaakjes die elementen inkaderen als een zoeker — ze
  animeren rond het hero-beeld en verschijnen on-hover rond portfolio-items. Versterkt door het
  monogram-R als watermerk in de footer.

---

## Tech stack

- **Next.js 14** (App Router) + **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** — subtiele entrance-animaties (respecteert `prefers-reduced-motion`)
- `next/font` voor self-hosted fonts, `next/image` voor lazy-loaded & geoptimaliseerde beelden

---

## Aan de slag

Vereist: **Node.js 18.17+** (getest op Node 22).

```bash
npm install          # dependencies installeren
npm run dev          # ontwikkelserver op http://localhost:3000
npm run build        # productie-build
npm start            # productie-build draaien
npm run lint         # linten
```

---

## Projectstructuur

```
app/
  layout.tsx              # fonts, globale SEO-metadata, header + footer
  page.tsx                # homepage (alle secties + JSON-LD)
  over/page.tsx           # Over mij
  portfolio/page.tsx      # Volledige, filterbare portfolio
  contact/page.tsx        # Contact: intake-formulier + FAQ
  api/contact/route.ts    # Verwerkt het contactformulier
  opengraph-image.tsx     # Dynamische Open Graph-afbeelding (PNG)
  twitter-image.tsx       # Hergebruikt de OG-afbeelding
  icon.svg                # Favicon (monogram)
  sitemap.ts / robots.ts  # SEO
  globals.css             # basis-stijlen, kleur-variabelen, utilities

components/
  ui/                     # herbruikbaar: Logo, Monogram, Button, Frame, Photo,
                          # Reveal, Section, SectionLabel, Container, PageHeader, Marquee
  sections/               # Header, Footer, Hero, Problem, Manifesto, Approach,
                          # Portfolio(+Grid), About, Testimonials, Trajecten,
                          # ContactCta, ContactForm, Faq

lib/
  data.ts                 # ALLE content: site-info, navigatie, portfolio, reviews, trajecten, FAQ
  utils.ts                # kleine classNames-helper

public/
  images/                 # placeholder-beelden (SVG) — vervang door echte foto's
  logo/                   # logobestanden

scripts/
  generate-placeholders.mjs  # genereert de placeholder-beelden opnieuw
```

---

## Content aanpassen

Vrijwel alle teksten en gegevens staan in **`lib/data.ts`**:

- **`site`** — naam, tagline, e-mailadres, regio, social links, site-URL.
- **`nav`** — navigatie-items.
- **`portfolio`** — portfolio-items (klant, type, titel, beeld, alt-tekst, verhouding).
- **`process`** — de stappen in "De aanpak".
- **`testimonials`** — klantreviews. _(Nu voorbeeldcontent — vervang door echte citaten.)_
- **`trajecten`** — je pakketten. `priceFrom` is een **richtprijs-placeholder**; pas aan naar je
  eigen tarief.
- **`faq`** — veelgestelde vragen op de contactpagina.

> Belangrijk: de reviews en prijzen zijn voorbeeldcontent. Vervang ze voordat je live gaat.

### Beelden vervangen

De `public/images/`-map bevat **SVG-placeholders** met de juiste verhoudingen. Vervang ze door
echte foto's (bij voorkeur `.webp` of `.jpg`):

1. Plaats je foto met dezelfde verhouding in `public/images/` (of `public/images/portfolio/`).
2. Werk in `lib/data.ts` het `src`-pad (en zo nodig `width`/`height`) bij.
3. `next/image` optimaliseert echte rasterfoto's automatisch en laadt ze lazy.

De afmetingen in `data.ts` bepalen de plek in de masonry-grid — houd de verhoudingen aan.

### Logo vervangen

Het woordmerk wordt getypografeerd met Archivo (matcht je logo). Het monogram staat in
`public/logo/`. Wil je je exacte export gebruiken, vervang dan die bestanden en/of pas
`components/ui/logo.tsx` en `components/ui/monogram.tsx` aan.

---

## Contactformulier koppelen

Standaard valideert `app/api/contact/route.ts` de aanvraag en logt deze (zichtbaar in je
serverlogs). Om aanvragen écht per e-mail te ontvangen, koppel je een e-maildienst. Voorbeeld met
[Resend](https://resend.com):

```bash
npm install resend
```

```ts
// in app/api/contact/route.ts, na de validatie:
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: 'website@jouwdomein.nl',
  to: 'hello@rinsebommerson.nl',
  subject: `Nieuwe aanvraag van ${naam}`,
  replyTo: email,
  text: `${naam} (${email})\nBedrijf: ${data.bedrijf}\nTraject: ${data.traject}\n\n${bericht}`,
});
```

Zet je sleutel in `.env.local`:

```
RESEND_API_KEY=...
```

Het formulier bevat al een honeypot-veld tegen spam.

---

## SEO, performance & toegankelijkheid

- **SEO**: per-pagina metadata, Open Graph + Twitter-cards, dynamische OG-afbeelding,
  `sitemap.xml`, `robots.txt` en JSON-LD (ProfessionalService).
- **Performance**: statische pagina's, `next/image` met lazy loading, self-hosted fonts, geen
  overbodige dependencies.
- **Toegankelijkheid**: semantische HTML, zichtbare focus-states, alt-teksten op alle beelden,
  skip-link, toetsenbordvriendelijke navigatie/accordion en respect voor `prefers-reduced-motion`.

> Vergeet niet `site.url` in `lib/data.ts` naar je echte domein te zetten — dit wordt gebruikt voor
> canonical-URLs, sitemap en Open Graph.

---

## Deployen

Aanbevolen: **[Vercel](https://vercel.com)** (makers van Next.js).

1. Push deze repo naar GitHub.
2. Importeer het project in Vercel — het framework wordt automatisch herkend.
3. Zet eventuele environment-variabelen (bijv. `RESEND_API_KEY`).
4. Deploy.

Elke andere host die Next.js 14 ondersteunt werkt ook (`npm run build` + `npm start`).
