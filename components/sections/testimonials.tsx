'use client';

import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { testimonials } from '@/lib/data';
import { Section } from '@/components/ui/section';
import { Container } from '@/components/ui/container';
import { SectionLabel } from '@/components/ui/section-label';

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();
  const total = testimonials.length;
  const t = testimonials[index];

  const go = (dir: number) => setIndex((p) => (p + dir + total) % total);

  return (
    <Section id="reviews" tone="inkt">
      <Container>
        <SectionLabel index="05">Wat klanten zeggen</SectionLabel>

        <div className="mt-14 min-h-[20rem] sm:min-h-[17rem]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, y: reduce ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: reduce ? 0 : -16 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="max-w-5xl font-body text-3xl font-light leading-[1.28] text-papier text-balance sm:text-4xl lg:text-[2.6rem]">
                <span className="text-signaal">&ldquo;</span>
                {t.quote}
                <span className="text-signaal">&rdquo;</span>
              </p>
              <footer className="mt-10 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <span className="font-display text-lg font-bold text-papier">{t.name}</span>
                <span className="font-display text-sm uppercase tracking-wider text-steen">
                  {t.role} &middot; {t.type}
                </span>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-12 flex items-center justify-between border-t border-papier/15 pt-6">
          <span className="font-display text-sm tracking-wider text-steen">
            {String(index + 1).padStart(2, '0')}
            <span className="mx-1 opacity-50">/</span>
            {String(total).padStart(2, '0')}
          </span>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Vorige review"
              className="flex h-12 w-12 items-center justify-center border border-papier/25 text-papier transition-colors duration-300 hover:border-signaal hover:bg-signaal hover:text-white"
            >
              <span aria-hidden="true">&larr;</span>
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Volgende review"
              className="flex h-12 w-12 items-center justify-center border border-papier/25 text-papier transition-colors duration-300 hover:border-signaal hover:bg-signaal hover:text-white"
            >
              <span aria-hidden="true">&rarr;</span>
            </button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
