import { Section } from '@/components/ui/section';
import { Container } from '@/components/ui/container';
import { SectionLabel } from '@/components/ui/section-label';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/ui/reveal';
import { PortfolioGrid } from './portfolio-grid';
import { portfolio } from '@/lib/data';

export function Portfolio() {
  // Curated preview op de homepage; volledige (filterbare) set staat op /portfolio.
  const preview = portfolio.slice(0, 6);

  return (
    <Section id="werk" tone="papier">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <SectionLabel index="03" rule={false}>
                Het werk
              </SectionLabel>
              <h2 className="mt-6 font-display text-display-md font-black text-balance">
                Beeld dat blijft hangen.
              </h2>
            </div>
            <Button href="/portfolio" variant="outline" arrow className="shrink-0">
              Volledige portfolio
            </Button>
          </div>
        </Reveal>

        <div className="mt-14">
          <PortfolioGrid items={preview} showFilter={false} />
        </div>
      </Container>
    </Section>
  );
}
