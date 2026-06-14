import Link from 'next/link';
import { nav, site } from '@/lib/data';
import { Container } from '@/components/ui/container';
import { Logo } from '@/components/ui/logo';
import { Monogram } from '@/components/ui/monogram';
import { Button } from '@/components/ui/button';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-inkt text-papier">
      {/* Monogram-watermerk (signatuur) */}
      <Monogram
        className="pointer-events-none absolute -bottom-16 -right-10 h-80 w-80 text-papier/[0.04] sm:h-[28rem] sm:w-[28rem]"
      />

      <Container className="relative z-10 py-20 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-md">
            <Logo variant="light" stacked />
            <p className="mt-7 font-body text-lg leading-relaxed text-papier/70">
              Meer dan foto&apos;s. Een visuele strategie die jouw groei laat zien — voordat je een
              woord hebt gezegd.
            </p>
            <div className="mt-8">
              <Button href="/contact" variant="solid" size="md" arrow>
                Ja, ik wil zichtbaar worden
              </Button>
            </div>
          </div>

          <nav aria-label="Footernavigatie">
            <h2 className="label-track text-steen">Navigatie</h2>
            <ul className="mt-6 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-display text-lg font-medium transition-colors hover:text-signaal"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="label-track text-steen">Contact</h2>
            <ul className="mt-6 space-y-3 font-display text-lg">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="link-underline transition-colors hover:text-signaal"
                >
                  {site.email}
                </a>
              </li>
              <li className="text-papier/70">{site.region}</li>
            </ul>
            <ul className="mt-6 flex gap-5">
              {site.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display text-sm font-semibold uppercase tracking-wider text-papier/70 transition-colors hover:text-signaal"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-papier/15 pt-8 font-display text-xs uppercase tracking-wider text-papier/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {site.name} Photography. Alle rechten voorbehouden.
          </p>
          <p>Brandfotografie &amp; visuele strategie</p>
        </div>
      </Container>
    </footer>
  );
}
