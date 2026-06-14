/**
 * Genereert on-brand SVG-placeholders in /public/images.
 * Vervang de output 1-op-1 door echte foto's (zelfde verhouding/bestandsnaam,
 * bij voorkeur .webp of .jpg). Opnieuw genereren: `node scripts/generate-placeholders.mjs`
 */
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const out = join(root, 'public', 'images');

const PAPIER = '#F4F1EA';
const INKT = '#16181C';
const SIGNAAL = '#D6321F';
const STEEN = '#8C887E';
const WOLK = '#EAE6DC';

const schemes = [
  { bg: INKT, mark: PAPIER, label: PAPIER },
  { bg: WOLK, mark: INKT, label: INKT },
  { bg: STEEN, mark: PAPIER, label: PAPIER },
];

function corners(w, h, color) {
  const m = Math.round(Math.min(w, h) * 0.05);
  const len = Math.round(Math.min(w, h) * 0.06);
  const sw = Math.max(2, Math.round(Math.min(w, h) * 0.004));
  const c = (d) => `<path d="${d}" fill="none" stroke="${color}" stroke-width="${sw}" />`;
  return [
    c(`M${m} ${m + len} V${m} H${m + len}`),
    c(`M${w - m - len} ${m} H${w - m} V${m + len}`),
    c(`M${m} ${h - m - len} V${h - m} H${m + len}`),
    c(`M${w - m - len} ${h - m} H${w - m} V${h - m - len}`),
  ].join('');
}

function svg({ w, h, label, scheme }) {
  const s = schemes[scheme];
  const size = Math.min(w, h) * 0.4;
  const tx = (w - size) / 2;
  const ty = (h - size) / 2;
  const k = size / 100;
  const fontSize = Math.round(Math.min(w, h) * 0.028);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="${label}">
  <rect width="${w}" height="${h}" fill="${s.bg}"/>
  <g transform="translate(${tx} ${ty}) scale(${k})" fill="none" stroke="${s.mark}" stroke-opacity="0.1" stroke-width="11" stroke-linecap="square">
    <path d="M25 15 V85"/>
    <path d="M25 15 H53 A19 19 0 0 1 53 53 H25"/>
    <path d="M44 53 L75 85"/>
    <path d="M25 85 H82"/>
  </g>
  ${corners(w, h, SIGNAAL)}
  <text x="${w / 2}" y="${h - Math.round(h * 0.06)}" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="${fontSize}" font-weight="700" letter-spacing="4" fill="${s.label}" fill-opacity="0.75">${label}</text>
</svg>
`;
}

const items = [
  { file: 'hero.svg', w: 1200, h: 1500, label: 'MERKSHOOT', scheme: 0 },
  { file: 'rinse.svg', w: 1200, h: 1500, label: 'RINSE BOMMERSON', scheme: 2 },
  { file: 'portfolio/p01.svg', w: 1200, h: 1500, label: 'BRANDING', scheme: 1 },
  { file: 'portfolio/p02.svg', w: 1200, h: 1600, label: 'ZAKELIJK', scheme: 0 },
  { file: 'portfolio/p03.svg', w: 1600, h: 1067, label: 'CAMPAGNE', scheme: 2 },
  { file: 'portfolio/p04.svg', w: 1200, h: 1500, label: 'PORTRET', scheme: 1 },
  { file: 'portfolio/p05.svg', w: 1600, h: 1067, label: 'BRANDING', scheme: 0 },
  { file: 'portfolio/p06.svg', w: 1200, h: 1500, label: 'ZAKELIJK', scheme: 2 },
  { file: 'portfolio/p07.svg', w: 1600, h: 1067, label: 'BRANDING', scheme: 1 },
  { file: 'portfolio/p08.svg', w: 1200, h: 1600, label: 'CAMPAGNE', scheme: 0 },
  { file: 'portfolio/p09.svg', w: 1200, h: 1200, label: 'PORTRET', scheme: 2 },
  { file: 'portfolio/p10.svg', w: 1600, h: 1067, label: 'ZAKELIJK', scheme: 1 },
  { file: 'portfolio/p11.svg', w: 1200, h: 1500, label: 'BRANDING', scheme: 0 },
  { file: 'portfolio/p12.svg', w: 1600, h: 1067, label: 'CAMPAGNE', scheme: 2 },
];

await mkdir(join(out, 'portfolio'), { recursive: true });
for (const item of items) {
  await writeFile(join(out, item.file), svg(item));
}
console.log(`Gegenereerd: ${items.length} placeholders in public/images`);
