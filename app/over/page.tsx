import type { Metadata } from 'next';
import { PageHeader } from '@/components/ui/page-header';
import { Section } from '@/components/ui/section';
import { Container } from '@/components/ui/container';
import { SectionLabel } from '@/components/ui/section-label';
import { Frame } from '@/components/ui/frame';
import { Photo } from '@/components/ui/photo';
import { Reveal } from '@/components/ui/reveal';
import { ContactCta } from '@/components/sections/contact-cta';

export const metadata: Metadata = {
  title: 'Over Rinse',
  description:
    'Rinse Bommerson denkt in positionering, niet in poses. Lees waarom hij brandfotografie als visuele strategie benadert.',
  alternates: { canonical: '/over' },
};

const values = [
  {
    index: '01',
    title: 'Strategie vóór de sluiter',
    body: 'Ik begin nooit bij een poselijst, maar bij je merk en je doelgroep. Wie wil je aantrekken, en welk beeld trekt precies die mensen aan?',
  },
  {
    index: '02',
    title: 'Regie waar je rust van krijgt',
    body: 'Je hoeft geen model te zijn. Ik bereid alles voor en stuur subtiel bij. Jij hoeft alleen maar te verschijnen.',
  },
  {
    index: '03',
    title: 'Beeld als systeem',
    body: 'Geen los plaatje, maar een samenhangende beeldtaal die werkt op je site, je socials én in je pitch.',
  },
  {
    index: '04',
    title: 'Editorial oog, tijdloos resultaat',
    body: 'Krachtig en redactioneel, zonder trucjes die volgend jaar gedateerd zijn. Beeld dat je jaren meeneemt.',
  },
];

export default function OverPage() {
  return (
    <>
      <PageHeader
        label="Over Rinse"
        title="Meer dan foto&apos;s. Een visuele strategie."
        intro="Ik help professionals en mkb-bedrijven er net zo sterk uit te zien als ze zijn — door heel Nederland."
      />

      <Section tone="papier">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <Frame inset={-12} size={26} color="inkt">
                  <Photo
                    src="/images/rinse.svg"
                    alt="Fotograaf Rinse Bommerson aan het werk tijdens een shoot"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="aspect-[4/5] w-full"
                  />
                </Frame>
                <p className="mt-5 font-display text-xs uppercase tracking-label text-steen">
                  Rinse Bommerson &middot; Fotograaf &amp; visueel strateeg
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={0.1}>
                <h2 className="font-display text-display-md font-black text-balance">
                  Ik help je eruitzien zoals je werkt.
                </h2>
                <div className="mt-8 space-y-6 font-body text-lg leading-relaxed text-inkt/80 text-pretty">
                  <p>
                    Ik begon met fotografie omdat ik gefascineerd was door dat ene moment: waarop
                    iemand zichzelf écht herkent in een beeld. Maar ik merkte al snel dat een mooie
                    foto niet genoeg is. Een beeld dat niets zegt over wie je bent en voor wie je
                    werkt, is een gemiste kans.
                  </p>
                  <p>
                    Daarom noem ik mezelf liever niet alleen fotograaf. Ik denk in positionering:
                    welke mensen wil je aantrekken, en welk beeld trekt precies hén aan? Pas als dat
                    helder is, pak ik de camera.
                  </p>
                  <p>
                    In de jaren daarna fotografeerde ik coaches, consultants, advocaten en creatieve
                    ondernemers door het hele land — stuk voor stuk mensen die wisten dat ze meer
                    waard waren dan hun beeld liet zien. Mijn werk is om dat verschil weg te nemen.
                  </p>
                </div>
                <p className="mt-8 font-body text-xl italic text-inkt/60">&mdash; Rinse</p>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="wolk">
        <Container>
          <Reveal>
            <SectionLabel>Wat mij anders maakt</SectionLabel>
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden border border-inkt/10 sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.index} delay={0.06 * i} className="h-full bg-wolk">
                <div className="flex h-full flex-col gap-4 p-8 sm:p-10">
                  <span className="font-display text-sm font-bold text-signaal">{v.index}</span>
                  <h3 className="font-display text-2xl font-extrabold leading-tight">{v.title}</h3>
                  <p className="font-body text-base leading-relaxed text-inkt/70">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="inkt" spacing="tight">
        <Container>
          <Reveal>
            <blockquote className="max-w-4xl font-body text-3xl font-light leading-[1.3] text-papier text-balance sm:text-4xl">
              <span className="text-signaal">&ldquo;</span>Een sterke foto verkoopt niet jezelf. Hij
              verkoopt het gevoel dat mensen krijgen als ze met je werken.
              <span className="text-signaal">&rdquo;</span>
            </blockquote>
          </Reveal>
        </Container>
      </Section>

      <ContactCta />
    </>
  );
}
