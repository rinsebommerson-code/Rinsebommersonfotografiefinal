import Link from 'next/link';
import { cn } from '@/lib/utils';
import { logo } from '@/lib/data';
import { Monogram } from './monogram';

type LogoProps = {
  /** 'dark' = donkere inkt (op lichte achtergrond), 'light' = papier (op donkere achtergrond). */
  variant?: 'dark' | 'light';
  /** Grotere, gestapelde weergave (footer). */
  stacked?: boolean;
  className?: string;
};

export function Logo({ variant = 'dark', stacked = false, className }: LogoProps) {
  const color = variant === 'light' ? 'text-papier' : 'text-inkt';

  return (
    <Link
      href="/"
      aria-label="Rinse Bommerson Photography — naar home"
      className={cn(
        'group inline-flex items-center gap-3 transition-opacity duration-300 hover:opacity-80',
        color,
        className,
      )}
    >
      {logo.useImageFiles ? (
        // Eigen logobestand uit /public/logo. Hoogte vast, breedte volgt de
        // verhouding van jouw bestand, dus geen vervorming.
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={variant === 'light' ? logo.files.light : logo.files.dark}
          alt=""
          className={cn('w-auto', stacked ? 'h-14' : 'h-9')}
        />
      ) : (
        <CompositeLogo stacked={stacked} variant={variant} />
      )}
    </Link>
  );
}

/** Standaard-lockup: nagetekend monogram + woordmerk in Archivo. */
function CompositeLogo({ stacked, variant }: { stacked: boolean; variant: 'dark' | 'light' }) {
  return (
    <>
      <Monogram className={cn('w-auto shrink-0', stacked ? 'h-12' : 'h-9')} />
      <span className="flex flex-col leading-[0.92]">
        {stacked ? (
          <>
            <span className="font-display text-2xl font-extrabold uppercase tracking-tight">
              Rinse
            </span>
            <span className="font-display text-2xl font-extrabold uppercase tracking-tight">
              Bommerson
            </span>
          </>
        ) : (
          <span className="font-display text-[1.05rem] font-extrabold uppercase tracking-tight">
            Rinse Bommerson
          </span>
        )}
        <span
          className={cn(
            'font-display font-semibold uppercase tracking-label text-steen',
            stacked ? 'mt-1 text-[0.6rem]' : 'text-[0.52rem]',
            variant === 'light' && 'text-steen',
          )}
        >
          Photography
        </span>
      </span>
    </>
  );
}
