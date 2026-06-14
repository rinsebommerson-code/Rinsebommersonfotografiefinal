import { Hero } from '@/components/sections/hero';
import { Problem } from '@/components/sections/problem';
import { Manifesto } from '@/components/sections/manifesto';
import { Approach } from '@/components/sections/approach';
import { Portfolio } from '@/components/sections/portfolio';
import { About } from '@/components/sections/about';
import { Testimonials } from '@/components/sections/testimonials';
import { Trajecten } from '@/components/sections/trajecten';
import { ContactCta } from '@/components/sections/contact-cta';
import { site } from '@/lib/data';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: `${site.name} Photography`,
  description: site.description,
  image: `${site.url}/opengraph-image`,
  url: site.url,
  email: site.email,
  areaServed: 'Nederland',
  founder: { '@type': 'Person', name: site.name },
  knowsAbout: [
    'Brandfotografie',
    'Personal branding',
    'Zakelijke portretfotografie',
    'Visuele strategie',
  ],
  sameAs: site.socials.map((s) => s.href),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Problem />
      <Manifesto />
      <Approach />
      <Portfolio />
      <About />
      <Testimonials />
      <Trajecten />
      <ContactCta />
    </>
  );
}
