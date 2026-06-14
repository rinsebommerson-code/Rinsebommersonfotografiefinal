import type { Metadata } from 'next';
import { PageHeader } from '@/components/ui/page-header';
import { Section } from '@/components/ui/section';
import { Container } from '@/components/ui/container';
import { PortfolioGrid } from '@/components/sections/portfolio-grid';
import { ContactCta } from '@/components/sections/contact-cta';
import { portfolio } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Werk',
  description:
    'Een selectie brandfotografie, profielportretten, zakelijke shoots en campagnes. Filter op type shoot.',
  alternates: { canonical: '/portfolio' },
};

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        label="Het werk"
        title="Beeld dat positioneert."
        intro="Een greep uit recente trajecten — van strakke profielportretten tot complete merkshoots en gestylde campagnes. Filter op het type shoot."
      />
      <Section tone="papier">
        <Container>
          <PortfolioGrid items={portfolio} showFilter />
        </Container>
      </Section>
      <ContactCta />
    </>
  );
}
