import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Zie design-plan / README. Warme redactionele neutralen + één signaalkleur.
        papier: '#F4F1EA',
        inkt: '#16181C',
        signaal: '#D6321F',
        steen: '#8C887E',
        wolk: '#EAE6DC',
      },
      fontFamily: {
        // Gekoppeld aan next/font CSS-variabelen (zie app/layout.tsx).
        display: ['var(--font-archivo)', 'system-ui', 'sans-serif'],
        body: ['var(--font-newsreader)', 'Georgia', 'serif'],
      },
      maxWidth: {
        editorial: '88rem', // 1408px — brede redactionele kolom
      },
      letterspacing: {},
      letterSpacing: {
        label: '0.22em',
      },
      fontSize: {
        // Vloeiende, oversized display-schaal (clamp = responsive zonder breakpoints)
        'display-xl': ['clamp(2.75rem, 8vw, 8.5rem)', { lineHeight: '0.92', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2.25rem, 5.5vw, 5.5rem)', { lineHeight: '0.96', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(1.875rem, 3.5vw, 3.25rem)', { lineHeight: '1.02', letterSpacing: '-0.015em' }],
        lede: ['clamp(1.125rem, 1.6vw, 1.5rem)', { lineHeight: '1.5' }],
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 38s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
