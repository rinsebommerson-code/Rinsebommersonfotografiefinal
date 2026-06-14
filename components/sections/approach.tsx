import { Section } from '@/components/ui/section';
import { Container } from '@/components/ui/container';
import { SectionLabel } from '@/components/ui/section-label';
import { Reveal } from '@/components/ui/reveal';
import { process } from '@/lib/data';

export function Approach() {
  return (
    <Section id="aanpak" tone="wolk">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Sticky kop */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <SectionLabel index="02" rule={false}>
                  De aanpak
                </SectionLabel>
                <h2 className="mt-8 font-display text-display-md font-black text-balance">
                  Niet zomaar een shoot. Een doordacht proces.
                </h2>
                <p className="mt-6 max-w-md font-body text-lg leading-relaxed text-inkt/75 text-pretty">
                  In vier stappen van &laquo;ik heb foto&apos;s nodig&raquo; naar een beeldtaal die
                  voor je werkt — lang na de shoot.
                </p>
              </Reveal>
            </div>
          </div>

          {/* Stappen */}
          <div className="lg:col-span-7 lg:col-start-6">
            <ol>
              {process.map((step, i) => (
                <li
                  key={step.index}
                  className="border-t border-inkt/15 py-8 first:border-t-0 first:pt-0 lg:py-12"
                >
                  <Reveal delay={0.05 * i}>
                    <div className="flex gap-6 sm:gap-10">
                      <span className="font-display text-xl font-black text-signaal sm:text-2xl">
                        {step.index}
                      </span>
                      <div>
                        <h3 className="font-display text-2xl font-extrabold leading-tight sm:text-3xl">
                          {step.title}
                        </h3>
                        <p className="mt-4 max-w-xl font-body text-lg leading-relaxed text-inkt/75 text-pretty">
                          {step.body}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </Section>
  );
}
