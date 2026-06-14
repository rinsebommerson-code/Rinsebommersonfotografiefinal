import { ImageResponse } from 'next/og';

export const alt = 'Rinse Bommerson Photography — Je bent al verder dan je foto’s laten zien';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const PAPIER = '#F4F1EA';
const INKT = '#16181C';
const SIGNAAL = '#D6321F';
const STEEN = '#8C887E';

// Probeer Archivo te laden voor een merkvaste, zware kop. Lukt dit niet
// (bijv. geen netwerk), dan valt next/og terug op het standaardlettertype.
async function loadArchivo(weight: number): Promise<ArrayBuffer | null> {
  try {
    const css = await (
      await fetch(`https://fonts.googleapis.com/css2?family=Archivo:wght@${weight}`, {
        headers: { 'User-Agent': 'Mozilla/5.0' },
      })
    ).text();
    const url = css.match(/src: url\((.+?)\) format/)?.[1];
    if (!url) return null;
    return await (await fetch(url)).arrayBuffer();
  } catch {
    return null;
  }
}

export default async function OpengraphImage() {
  const [bold, semi] = await Promise.all([loadArchivo(800), loadArchivo(600)]);
  const fonts = [
    bold && { name: 'Archivo', data: bold, weight: 800 as const, style: 'normal' as const },
    semi && { name: 'Archivo', data: semi, weight: 600 as const, style: 'normal' as const },
  ].filter(Boolean) as { name: string; data: ArrayBuffer; weight: 600 | 800; style: 'normal' }[];

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: PAPIER,
          color: INKT,
          padding: '72px 80px',
          fontFamily: fonts.length ? 'Archivo' : 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ width: 22, height: 22, backgroundColor: SIGNAAL }} />
          <div
            style={{
              fontSize: 24,
              fontWeight: 600,
              letterSpacing: 5,
              textTransform: 'uppercase',
              color: STEEN,
            }}
          >
            Brandfotografie · Visuele strategie
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            maxWidth: 1010,
            fontSize: 82,
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: -2,
          }}
        >
          <span>Je bent al&nbsp;</span>
          <span style={{ color: SIGNAAL }}>verder&nbsp;</span>
          <span>dan je foto&apos;s laten zien.</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 30 }}>
            <span style={{ fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1 }}>
              Rinse Bommerson
            </span>
            <span style={{ fontWeight: 600, color: STEEN, letterSpacing: 3 }}>PHOTOGRAPHY</span>
          </div>
          <div style={{ width: 130, height: 8, backgroundColor: SIGNAAL }} />
        </div>
      </div>
    ),
    { ...size, fonts: fonts.length ? fonts : undefined },
  );
}
