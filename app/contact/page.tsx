import type { Metadata } from 'next';
import { PageHeader } from '@/components/ui/page-header';
import { Section } from '@/components/ui/section';
import { Container } from '@/components/ui/container';
import { SectionLabel } from '@/components/ui/section-label';
import { Reveal } from '@/components/ui/reveal';
import { ContactForm } from '@/components/sections/contact-form';
import { Faq } from '@/components/sections/faq';
import { site } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Plan een vrijblijvende kennismaking met Rinse Bommerson. Binnen 24 uur een helder plan voor jouw beeld.',
  alternates: { canonical: '/contact' },
};

const steps = [
  { n: '01', t: 'Kennismaking', d: 'We bespreken je merk, je doel en welk traject past. Vrijblijvend.' },
  { n: '02', t: 'Plan & shoot', d: 'Ik maak een concept en zorg op de dag voor regie en rust.' },
  { n: '03', t: 'Je beeldbank', d: 'Je ontvangt een samenhangende set, klaar voor direct gebruik.' },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        label="Contact"
        title="Laten we je beeld laten kloppen."
        intro="Plan een vrijblijvende kennismaking. Vertel kort waar je staat en wat je wilt bereiken — binnen 24 uur krijg je een helder plan."
      />

      <Section tone="papier">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            {/* Info */}
            <div className="lg:col-span-5">
              <Reveal>
                <SectionLabel rule={false}>Zo werkt het</SectionLabel>
                <ol className="mt-8 space-y-7">
                  {steps.map((s) => (
                    <li key={s.n} className="flex gap-5">
                      <span className="font-display text-lg font-black text-signaal">{s.n}</span>
                      <div>
                        <h3 className="font-display text-xl font-extrabold">{s.t}</h3>
                        <p className="mt-1.5 font-body text-base leading-relaxed text-inkt/70">
                          {s.d}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>

                <div className="mt-12 border-t border-inkt/10 pt-8">
                  <h3 className="label-track text-steen">Liever direct</h3>
                  <a
                    href={`mailto:${site.email}`}
                    className="mt-3 inline-block font-display text-xl font-bold link-underline transition-colors hover:text-signaal"
                  >
                    {site.email}
                  </a>
                  <p className="mt-2 font-body text-base text-inkt/60">{site.region}</p>
                </div>
              </Reveal>
            </div>

            {/* Formulier */}
            <div className="lg:col-span-7">
              <Reveal delay={0.1}>
                <ContactForm />
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="wolk" spacing="tight">
        <Container>
          <Reveal>
            <SectionLabel index="07">Veelgestelde vragen</SectionLabel>
            <div className="mt-10 max-w-3xl">
              <Faq />
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
