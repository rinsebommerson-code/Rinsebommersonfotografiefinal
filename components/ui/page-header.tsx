import { Container } from './container';
import { SectionLabel } from './section-label';
import { Reveal } from './reveal';

/** Consistente paginakop met ruimte voor de vaste header. */
export function PageHeader({
  label,
  title,
  intro,
}: {
  label: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="grain border-b border-inkt/10 pb-16 pt-36 sm:pb-20 sm:pt-44">
      <Container>
        <Reveal>
          <SectionLabel>{label}</SectionLabel>
          <h1 className="mt-8 max-w-5xl font-display text-display-lg font-black text-balance">
            {title}
          </h1>
          {intro && (
            <p className="mt-7 max-w-2xl font-body text-lede leading-relaxed text-inkt/80 text-pretty">
              {intro}
            </p>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
