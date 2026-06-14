import { Section } from '@/components/ui/section';
import { Container } from '@/components/ui/container';
import { SectionLabel } from '@/components/ui/section-label';
import { Reveal } from '@/components/ui/reveal';

const gaps = [
  {
    index: '01',
    title: 'Je oogt goedkoper dan je bent.',
    body: 'Gedateerde of onscherpe beelden onderhandelen je tarief naar beneden — nog voor het gesprek begint.',
  },
  {
    index: '02',
    title: 'Je valt weg in de massa.',
    body: 'Zonder eigen beeldtaal lijk je op elke andere aanbieder. Niets om je aan te herinneren, niets om voor te kiezen.',
  },
  {
    index: '03',
    title: 'Je twijfelt bij elke post.',
    body: 'Geen beeld dat klopt betekent: liever niet zichtbaar. En wie onzichtbaar blijft, verkoopt niet.',
  },
];

export function Problem() {
  return (
    <Section id="kloof" tone="papier">
      <Container>
        <Reveal>
          <SectionLabel index="01">De kloof</SectionLabel>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="font-display text-display-lg font-black text-balance">
                Je bedrijf groeide. Je beeld bleef achter.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-5 lg:pt-3">
            <Reveal delay={0.1}>
              <p className="font-body text-lede leading-relaxed text-inkt/80 text-pretty">
                Je vraagt inmiddels een premium tarief en levert werk waar je trots op bent. Maar je
                foto&apos;s komen nog van een snelle kiek of een shoot van drie jaar — en één
                positionering — geleden. Elke keer dat iemand je profiel opent, ontstaat een kloof
                tussen wie je bent en hoe je overkomt. Die kloof kost je klanten.
              </p>
            </Reveal>
          </div>
        </div>

        <ul className="mt-20 grid gap-px overflow-hidden border-y border-inkt/10 sm:grid-cols-3 sm:border sm:border-inkt/10">
          {gaps.map((gap, i) => (
            <li key={gap.index} className="bg-papier">
              <Reveal delay={0.08 * i} className="h-full">
                <div className="flex h-full flex-col gap-4 p-8 sm:p-10">
                  <span className="font-display text-sm font-bold text-signaal">{gap.index}</span>
                  <h3 className="font-display text-2xl font-extrabold leading-tight">{gap.title}</h3>
                  <p className="font-body text-base leading-relaxed text-inkt/70">{gap.body}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
