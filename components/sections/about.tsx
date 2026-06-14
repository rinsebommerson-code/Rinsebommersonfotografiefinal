import { Section } from '@/components/ui/section';
import { Container } from '@/components/ui/container';
import { SectionLabel } from '@/components/ui/section-label';
import { Button } from '@/components/ui/button';
import { Frame } from '@/components/ui/frame';
import { Photo } from '@/components/ui/photo';
import { Reveal } from '@/components/ui/reveal';

export function About() {
  return (
    <Section id="over" tone="wolk">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <Frame inset={-12} size={26} color="inkt">
                <Photo
                  src="/images/rinse.svg"
                  alt="Portret van fotograaf Rinse Bommerson"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="aspect-[4/5] w-full"
                />
              </Frame>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <SectionLabel index="04" rule={false}>
                Over Rinse
              </SectionLabel>
              <h2 className="mt-7 font-display text-display-md font-black text-balance">
                Ik fotografeer geen gezichten. Ik fotografeer posities.
              </h2>
              <div className="mt-7 space-y-5 font-body text-lede leading-relaxed text-inkt/80 text-pretty">
                <p>
                  Ik ben Rinse. Jarenlang zag ik sterke ondernemers zichzelf tekortdoen met beeld
                  dat niet klopte — terwijl één rake foto het verschil maakt tussen
                  &laquo;interessant&raquo; en &laquo;die wil ik&raquo;.
                </p>
                <p>
                  Daarom werk ik anders: ik begin bij je positionering, niet bij de camera. Geen
                  geforceerde poses, maar beeld dat voelt als jij — op je sterkst.
                </p>
              </div>
              <p className="mt-7 font-body text-xl italic text-inkt/60">&mdash; Rinse Bommerson</p>
              <div className="mt-9">
                <Button href="/over" variant="outline" arrow>
                  Meer over mij
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
