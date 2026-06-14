/**
 * Centrale content van de site.
 * ─────────────────────────────────────────────────────────────────────
 * Pas hier teksten, portfolio-items, reviews en trajecten aan.
 * Beelden zijn placeholders in /public/images — vervang ze 1-op-1 door
 * echte foto's met dezelfde verhoudingen (zie README).
 *
 * LET OP: reviews en (richt)prijzen hieronder zijn voorbeeldcontent.
 * Vervang ze door echte klantcitaten en jouw eigen tarieven.
 */

export const site = {
  name: 'Rinse Bommerson',
  role: 'Photography',
  tagline: 'Visuele strategie voor professionals',
  description:
    'Brandfotografie & visuele strategie voor professionals en mkb. Geen plaatjes — beeld dat klanten doet kiezen voor jou. Door heel Nederland.',
  url: 'https://www.rinsebommerson.nl',
  email: 'hello@rinsebommerson.nl',
  phone: '+31 6 00 00 00 00',
  region: 'Door heel Nederland',
  socials: [
    { label: 'Instagram', href: 'https://instagram.com/' },
    { label: 'LinkedIn', href: 'https://linkedin.com/' },
  ],
} as const;

export const nav = [
  { label: 'Werk', href: '/portfolio' },
  { label: 'Aanpak', href: '/#aanpak' },
  { label: 'Trajecten', href: '/#trajecten' },
  { label: 'Over', href: '/over' },
  { label: 'Contact', href: '/contact' },
] as const;

/* ── Portfolio ─────────────────────────────────────────────────────── */

export type ShootType = 'Branding' | 'Portret' | 'Zakelijk' | 'Campagne';

export type PortfolioItem = {
  id: string;
  client: string;
  type: ShootType;
  title: string;
  src: string;
  alt: string;
  /** Intrinsieke verhouding — bepaalt de plek in de masonry. */
  width: number;
  height: number;
  featured?: boolean;
};

export const shootTypes: ShootType[] = ['Branding', 'Portret', 'Zakelijk', 'Campagne'];

export const portfolio: PortfolioItem[] = [
  {
    id: 'merel-coaching',
    client: 'Merel — Leiderschapscoach',
    type: 'Branding',
    title: 'Volledige merkshoot',
    src: '/images/portfolio/p01.svg',
    alt: 'Leiderschapscoach Merel in een lichte werkruimte tijdens een merkshoot',
    width: 1200,
    height: 1500,
    featured: true,
  },
  {
    id: 'lex-advocaten',
    client: 'Lex & Co Advocaten',
    type: 'Zakelijk',
    title: 'Teamportretten & kantoorbeeld',
    src: '/images/portfolio/p02.svg',
    alt: 'Advocaat in pak, zakelijk portret tegen een donkere achtergrond',
    width: 1200,
    height: 1600,
  },
  {
    id: 'studio-noord-campagne',
    client: 'Studio Noord',
    type: 'Campagne',
    title: 'Gestylde campagne met model',
    src: '/images/portfolio/p03.svg',
    alt: 'Gestylde campagnefoto met model voor merk Studio Noord',
    width: 1600,
    height: 1067,
    featured: true,
  },
  {
    id: 'daan-consultant',
    client: 'Daan — Strategieconsultant',
    type: 'Portret',
    title: 'Profielportret',
    src: '/images/portfolio/p04.svg',
    alt: 'Strategieconsultant Daan, profielportret in daglicht',
    width: 1200,
    height: 1500,
  },
  {
    id: 'bloomwork-branding',
    client: 'Bloomwork',
    type: 'Branding',
    title: 'Beeldbank voor website & socials',
    src: '/images/portfolio/p05.svg',
    alt: 'Ondernemer aan het werk, sfeerbeeld voor merk Bloomwork',
    width: 1600,
    height: 1067,
  },
  {
    id: 'sanne-finance',
    client: 'Sanne — Financieel adviseur',
    type: 'Zakelijk',
    title: 'Zakelijk portret',
    src: '/images/portfolio/p06.svg',
    alt: 'Financieel adviseur Sanne, zelfverzekerd zakelijk portret',
    width: 1200,
    height: 1500,
  },
  {
    id: 'kade-architecten',
    client: 'Kade Architecten',
    type: 'Branding',
    title: 'Merkverhaal in beeld',
    src: '/images/portfolio/p07.svg',
    alt: 'Architect aan de tekentafel, merkverhaal in beeld voor Kade Architecten',
    width: 1600,
    height: 1067,
  },
  {
    id: 'voss-campagne',
    client: 'VOSS',
    type: 'Campagne',
    title: 'Lookbook & lancering',
    src: '/images/portfolio/p08.svg',
    alt: 'Model in gestylde lookbook-shoot voor merk VOSS',
    width: 1200,
    height: 1600,
    featured: true,
  },
  {
    id: 'tessa-spreker',
    client: 'Tessa — Keynote spreker',
    type: 'Portret',
    title: 'Podium- en profielbeeld',
    src: '/images/portfolio/p09.svg',
    alt: 'Keynote spreker Tessa, krachtig profielportret',
    width: 1200,
    height: 1200,
  },
  {
    id: 'noorderlicht-mkb',
    client: 'Noorderlicht B.V.',
    type: 'Zakelijk',
    title: 'Bedrijfsreportage',
    src: '/images/portfolio/p10.svg',
    alt: 'Medewerkers in gesprek tijdens een bedrijfsreportage bij Noorderlicht',
    width: 1600,
    height: 1067,
  },
  {
    id: 'iris-creatief',
    client: 'Iris — Creatief ondernemer',
    type: 'Branding',
    title: 'Persoonlijke merkshoot',
    src: '/images/portfolio/p11.svg',
    alt: 'Creatief ondernemer Iris in haar atelier, persoonlijke merkshoot',
    width: 1200,
    height: 1500,
  },
  {
    id: 'atelier-mauve',
    client: 'Atelier Mauve',
    type: 'Campagne',
    title: 'Seizoenscampagne',
    src: '/images/portfolio/p12.svg',
    alt: 'Gestylde seizoenscampagne met model voor Atelier Mauve',
    width: 1600,
    height: 1067,
  },
];

/* ── Werkwijze / aanpak ────────────────────────────────────────────── */

export type ProcessStep = {
  index: string;
  title: string;
  body: string;
};

export const process: ProcessStep[] = [
  {
    index: '01',
    title: 'Strategie eerst',
    body: 'Voor de camera erbij komt, bepalen we wat je beeld moet zéggen. Wie wil je aantrekken, waarin onderscheid je je, en welk gevoel mag blijven hangen? Hieruit volgt een helder beeldconcept — geen toevalstreffer.',
  },
  {
    index: '02',
    title: 'Regie op de dag',
    body: 'Styling, locatie en regie zijn voorbereid, zodat jij alleen jezelf hoeft te zijn. Ik stuur subtiel bij tot je houding klopt. Ook als je een hekel hebt aan op de foto staan — juist dan.',
  },
  {
    index: '03',
    title: 'Een visuele toolkit',
    body: 'Je krijgt geen losse headshot, maar een samenhangende set: portretten, sfeer- en werkbeelden voor je site, socials en pitch. Eén consistente uitstraling over al je kanalen.',
  },
  {
    index: '04',
    title: 'Beeld dat meegroeit',
    body: 'Je merk staat niet stil, je beeld dus ook niet. We bouwen aan een beeldtaal die je jaren meeneemt en die je bij elke volgende stap kunt uitbreiden.',
  },
];

/* ── Sociaal bewijs ────────────────────────────────────────────────── */

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  type: ShootType;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      'Voor het eerst voelt mijn website als míjn bedrijf. Rinse keek niet naar mijn gezicht, maar naar mijn positionering — en dat zie je terug in elk beeld. Binnen een maand drie aanvragen uit een hoger segment.',
    name: 'Merel Dijkstra',
    role: 'Leiderschapscoach',
    type: 'Branding',
  },
  {
    quote:
      'Ik haat normaal foto’s van mezelf. Rinse maakte het ontspannen en strategisch tegelijk. De beelden stralen precies de autoriteit uit waar ik jaren naar zocht.',
    name: 'Daan Verheul',
    role: 'Strategieconsultant',
    type: 'Portret',
  },
  {
    quote:
      'Geen standaard kantoorkiekjes, maar een doordachte beeldbank die ons hele team op één lijn zet. Onze nieuwe klanten noemen de uitstraling letterlijk als reden om te bellen.',
    name: 'Sanne Bakker',
    role: 'Partner, Lex & Co Advocaten',
    type: 'Zakelijk',
  },
  {
    quote:
      'De campagne tilde ons merk naar een ander niveau. Rinse denkt mee als strateeg, niet alleen als fotograaf. Dat verschil is precies waarom we terugkomen.',
    name: 'Iris Holman',
    role: 'Oprichter, Studio Noord',
    type: 'Campagne',
  },
];

/* ── Trajecten / aanbod ────────────────────────────────────────────── */

export type Traject = {
  id: string;
  name: string;
  tagline: string;
  forWho: string;
  outcome: string;
  includes: string[];
  /** Richtprijs — voorbeeldwaarde, pas aan naar jouw tarief. */
  priceFrom: string;
  featured?: boolean;
};

export const trajecten: Traject[] = [
  {
    id: 'statement',
    name: 'Statement',
    tagline: 'Eén beeld dat klopt',
    forWho: 'Voor de professional die nú een sterk, actueel portret nodig heeft.',
    outcome:
      'Een profielportret dat meteen laat zien dat je je vak verstaat — voor je site, LinkedIn en pitch.',
    includes: [
      'Voorgesprek over je positionering',
      '1 uur shoot, één look',
      'Selectie van 5 bewerkte beelden',
      'Klaar voor web & print',
    ],
    priceFrom: '750',
  },
  {
    id: 'merkbeeld',
    name: 'Merkbeeld',
    tagline: 'Je complete visuele basis',
    forWho:
      'Voor de ondernemer die doorgroeit en wil dat álles consistent klopt.',
    outcome:
      'Een samenhangende beeldbank — portretten, sfeer- en werkbeelden — die je merk overal dezelfde taal laat spreken.',
    includes: [
      'Strategiesessie & beeldconcept',
      'Halve dag shoot, meerdere looks & locaties',
      '25 bewerkte beelden in een visuele toolkit',
      'Beeldgids voor consistent gebruik',
    ],
    priceFrom: '1.950',
    featured: true,
  },
  {
    id: 'campagne',
    name: 'Campagne',
    tagline: 'Voor een lancering of rebrand',
    forWho:
      'Voor merken die een statement willen maken met een gestylde campagne.',
    outcome:
      'Een complete campagne — van concept tot gestylde shoot met model en styling — klaar om uit te rollen over al je kanalen.',
    includes: [
      'Volledig concept & moodboard',
      'Productie: styling, model & locatie',
      'Hele dag shoot',
      'Campagneset op maat van je uitrol',
    ],
    priceFrom: 'op aanvraag',
  },
];

/* ── Veelgestelde vragen ───────────────────────────────────────────── */

export const faq = [
  {
    q: 'Ik vind het doodeng om op de foto te staan. Werkt dit dan wel?',
    a: 'Juist dan. Het grootste deel van mijn werk is mensen op hun gemak stellen. Met regie, voorbereiding en een duidelijk plan hoef jij alleen maar te verschijnen — de rest stuur ik.',
  },
  {
    q: 'Werk je door heel Nederland?',
    a: 'Ja. Ik reis door het hele land en werk op locatie, in studio of bij jou op kantoor — wat het beeld het sterkst maakt.',
  },
  {
    q: 'Hoe snel ontvang ik de beelden?',
    a: 'Een eerste preview krijg je binnen enkele dagen. De volledige, bewerkte set lever ik doorgaans binnen twee weken.',
  },
  {
    q: 'Ik weet nog niet welk traject past. Kan ik gewoon even sparren?',
    a: 'Graag. Plan een vrijblijvende kennismaking — dan kijken we samen wat jouw merk op dit moment nodig heeft.',
  },
];
