import type { Metadata, Viewport } from 'next';
import { Archivo, Newsreader } from 'next/font/google';
import './globals.css';
import { site } from '@/lib/data';
import { Header } from '@/components/sections/header';
import { Footer } from '@/components/sections/footer';

// Display / grotesk — sluit aan op het logo (RINSE BOMMERSON).
const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
});

// Redactionele serif voor lopende tekst en quotes.
const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--font-newsreader',
  display: 'swap',
  style: ['normal', 'italic'],
  weight: ['300', '400', '500', '600'],
  fallback: ['Georgia', 'serif'],
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    'brandfotografie',
    'personal branding fotograaf',
    'zakelijke portretten',
    'profielfoto',
    'bedrijfsfotografie',
    'visuele strategie',
    'fotograaf ondernemers',
    'Rinse Bommerson',
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    url: site.url,
    siteName: `${site.name} Photography`,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  category: 'photography',
};

export const viewport: Viewport = {
  themeColor: '#F4F1EA',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className={`${archivo.variable} ${newsreader.variable}`}>
      <body className="font-body antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-none focus:bg-inkt focus:px-4 focus:py-2 focus:font-display focus:text-sm focus:font-semibold focus:uppercase focus:tracking-wider focus:text-papier"
        >
          Direct naar inhoud
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
