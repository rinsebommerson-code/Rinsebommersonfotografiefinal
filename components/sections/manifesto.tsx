import { Section } from '@/components/ui/section';
import { Container } from '@/components/ui/container';
import { Marquee } from '@/components/ui/marquee';
import { Reveal } from '@/components/ui/reveal';

const words = [
  'Zichtbaarheid',
  'Strategie',
  'Merk',
  'Regie',
  'Editorial',
  'Tijdloos',
  'Positionering',
];

export function Manifesto() {
  return (
    <Section tone="inkt" spacing="default" className="overflow-hidden">
      <Container>
        <Reveal>
          <p className="label-track text-steen">Het uitgangspunt</p>
          <h2 className="mt-7 max-w-4xl font-display text-display-md font-black text-balance">
            Zichtbaarheid is geen luxe. Het is{' '}
            <span className="text-signaal">strategie</span>.
          </h2>
          <p className="mt-7 max-w-2xl font-body text-lede leading-relaxed text-papier/70 text-pretty">
            Mensen kiezen wat ze vertrouwen, en vertrouwen begint bij wat ze zien. Sterk beeld is
            daarom geen sluitstuk van je marketing — het is het fundament eronder.
          </p>
        </Reveal>
      </Container>

      <Marquee items={words} className="mt-16 border-y border-papier/15 py-5 text-papier" />
    </Section>
  );
}
