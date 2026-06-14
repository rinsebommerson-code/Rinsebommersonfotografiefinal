import { Section } from '@/components/ui/section';
import { Container } from '@/components/ui/container';
import { SectionLabel } from '@/components/ui/section-label';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/ui/reveal';
import { trajecten } from '@/lib/data';
import { cn } from '@/lib/utils';

function formatPrice(value: string) {
  return /\d/.test(value) ? `vanaf € ${value}` : value.charAt(0).toUpperCase() + value.slice(1);
}

export function Trajecten() {
  return (
    <Section id="trajecten" tone="papier">
      <Container>
        <Reveal>
          <SectionLabel index="06">Trajecten</SectionLabel>
          <div className="mt-12 max-w-3xl">
            <h2 className="font-display text-display-md font-black text-balance">
              Drie manieren om met beeld te groeien.
            </h2>
            <p className="mt-6 font-body text-lede leading-relaxed text-inkt/80 text-pretty">
              Geen losse foto&apos;s, maar een keuze die past bij waar je nu staat. Twijfel je welk
              traject het beste werkt? Dan bepalen we dat samen in de kennismaking.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-3 lg:gap-7">
          {trajecten.map((t, i) => (
            <Reveal key={t.id} delay={0.08 * i} className="h-full">
              <article
                className={cn(
                  'flex h-full flex-col border p-8 transition-transform duration-500 ease-editorial sm:p-9',
                  t.featured
                    ? 'border-inkt bg-inkt text-papier lg:-translate-y-4'
                    : 'border-inkt/15 bg-papier text-inkt',
                )}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-3xl font-black">{t.name}</h3>
                    <p
                      className={cn(
                        'mt-1 font-display text-sm font-semibold uppercase tracking-wider',
                        t.featured ? 'text-signaal' : 'text-steen',
                      )}
                    >
                      {t.tagline}
                    </p>
                  </div>
                  {t.featured && (
                    <span className="shrink-0 bg-signaal px-3 py-1.5 font-display text-[0.6rem] font-bold uppercase tracking-label text-white">
                      Meest gekozen
                    </span>
                  )}
                </div>

                <p
                  className={cn(
                    'mt-6 font-body text-base leading-relaxed',
                    t.featured ? 'text-papier/75' : 'text-inkt/70',
                  )}
                >
                  {t.forWho}
                </p>

                <p
                  className={cn(
                    'mt-5 font-body text-lg leading-relaxed',
                    t.featured ? 'text-papier' : 'text-inkt/90',
                  )}
                >
                  {t.outcome}
                </p>

                <ul
                  className={cn(
                    'mt-7 space-y-3 border-t pt-7 font-body',
                    t.featured ? 'border-papier/20' : 'border-inkt/10',
                  )}
                >
                  {t.includes.map((inc) => (
                    <li key={inc} className="flex gap-3">
                      <span className="mt-1 select-none font-display text-signaal" aria-hidden="true">
                        —
                      </span>
                      <span className={t.featured ? 'text-papier/85' : 'text-inkt/75'}>{inc}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-9">
                  <p
                    className={cn(
                      'font-display text-xl font-extrabold',
                      t.featured ? 'text-papier' : 'text-inkt',
                    )}
                  >
                    {formatPrice(t.priceFrom)}
                  </p>
                  <div className="mt-5">
                    <Button
                      href="/contact"
                      variant={t.featured ? 'solid' : 'outline'}
                      arrow
                      className="w-full"
                    >
                      Plan een gesprek
                    </Button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-8 font-body text-sm text-inkt/55">
            Genoemde bedragen zijn richtprijzen excl. btw. Elk traject stem ik af op jouw doel.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
