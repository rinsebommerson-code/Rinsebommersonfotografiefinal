'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { nav } from '@/lib/data';
import { cn } from '@/lib/utils';
import { Container } from '@/components/ui/container';
import { Logo } from '@/components/ui/logo';
import { Button } from '@/components/ui/button';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Sluit menu bij route-wissel + vergrendel scroll wanneer open.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-500 ease-editorial',
        scrolled || open
          ? 'border-b border-inkt/10 bg-papier/85 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <Container className="flex h-20 items-center justify-between">
        <Logo />

        <nav aria-label="Hoofdnavigatie" className="hidden items-center gap-9 lg:flex">
          {nav.map((item) => {
            const active =
              item.href.startsWith('/') && !item.href.includes('#') && pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'font-display text-[0.8rem] font-semibold uppercase tracking-wider transition-colors duration-200 hover:text-signaal',
                  active ? 'text-signaal' : 'text-inkt',
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <Button href="/contact" size="md" arrow>
            Plan kennismaking
          </Button>
        </nav>

        {/* Mobiele toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobiel-menu"
          aria-label={open ? 'Menu sluiten' : 'Menu openen'}
          className="relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-[5px] lg:hidden"
        >
          <span
            className={cn(
              'block h-[2px] w-7 bg-inkt transition-all duration-300',
              open && 'translate-y-[7px] rotate-45',
            )}
          />
          <span className={cn('block h-[2px] w-7 bg-inkt transition-all duration-300', open && 'opacity-0')} />
          <span
            className={cn(
              'block h-[2px] w-7 bg-inkt transition-all duration-300',
              open && '-translate-y-[7px] -rotate-45',
            )}
          />
        </button>
      </Container>

      {/* Mobiel overlay-menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobiel-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col bg-inkt text-papier lg:hidden"
          >
            <div className="flex flex-1 flex-col justify-center px-8">
              <nav aria-label="Mobiele navigatie" className="flex flex-col gap-1">
                {nav.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: reduce ? 0 : 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.06 * i + 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      href={item.href}
                      className="block py-2 font-display text-5xl font-extrabold uppercase tracking-tight transition-colors hover:text-signaal sm:text-6xl"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>
            <div className="border-t border-papier/15 px-8 py-8">
              <Button href="/contact" variant="light" size="lg" arrow className="w-full">
                Plan een kennismaking
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
