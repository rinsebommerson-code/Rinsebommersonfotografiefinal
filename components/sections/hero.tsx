import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Frame } from '@/components/ui/frame';
import { Photo } from '@/components/ui/photo';
import { Reveal } from '@/components/ui/reveal';

export function Hero() {
  return (
    <section className="grain relative flex min-h-screen items-center overflow-hidden pt-24">
      <Container className="w-full">
        <div className="grid w-full gap-12 py-12 lg:grid-cols-12 lg:items-center lg:gap-8">
          {/* Tekstkolom */}
          <div className="lg:col-span-7 lg:pr-6">
            <Reveal>
              <p className="label-track text-steen">
                Brandfotografie
                <span className="mx-2 text-signaal">/</span>
                Visuele strategie
                <span className="mx-2 text-signaal">/</span>
                Door heel Nederland
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-7 font-display text-display-xl font-black text-balance">
                Je bent al{' '}
                <em className="font-body font-light italic text-signaal">verder</em> dan je
                foto&apos;s laten zien.
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-8 max-w-xl font-body text-lede text-inkt/80 text-pretty">
                Ik maak brandfotografie die jouw groei laat zien voordat je een woord zegt — een
                visuele strategie die de juiste klanten doet kiezen voor jou.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button href="/contact" size="lg" arrow>
                  Plan een kennismaking
                </Button>
                <Button href="/portfolio" variant="outline" size="lg">
                  Bekijk het werk
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Beeldkolom — asymmetrisch lager geplaatst */}
          <div className="lg:col-span-5 lg:translate-y-6">
            <Reveal delay={0.2}>
              <Frame inset={-14} size={28} color="inkt">
                <Photo
                  src="/images/hero.svg"
                  alt="Zakelijk portret uit een merkshoot van Rinse Bommerson"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="aspect-[4/5] w-full"
                />
              </Frame>
              <p className="mt-5 flex items-center justify-between font-display text-xs uppercase tracking-label text-steen">
                <span>Merkshoot</span>
                <span aria-hidden="true">01 / Portret</span>
              </p>
            </Reveal>
          </div>
        </div>
      </Container>

      {/* Scroll-hint */}
      <div className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex">
        <span className="font-display text-[0.6rem] uppercase tracking-label text-steen">Scroll</span>
        <span className="h-12 w-px bg-inkt/20" />
      </div>
    </section>
  );
}
