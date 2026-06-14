import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/ui/reveal';

/** Afsluitende conversiemoment — de enige plek waar de signaalkleur domineert. */
export function ContactCta() {
  return (
    <section id="contact-cta" className="bg-signaal text-white">
      <Container className="py-24 sm:py-32">
        <Reveal>
          <p className="label-track text-white/70">Klaar?</p>
          <h2 className="mt-7 max-w-4xl font-display text-display-lg font-black text-balance">
            Klaar om gezien te worden zoals je werkt?
          </h2>
          <p className="mt-7 max-w-2xl font-body text-lede leading-relaxed text-white/90 text-pretty">
            Plan een vrijblijvende kennismaking. Binnen 24 uur hoor je van me — geen verkooppraat,
            wel een helder plan voor jouw beeld.
          </p>
          <div className="mt-10">
            <Button href="/contact" variant="light" size="lg" arrow>
              Ja, ik wil zichtbaar worden
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
