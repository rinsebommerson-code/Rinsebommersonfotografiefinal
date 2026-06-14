import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Monogram } from './monogram';

type LogoProps = {
  /** 'dark' = donkere inkt (op lichte achtergrond), 'light' = papier (op donkere achtergrond). */
  variant?: 'dark' | 'light';
  /** Gestapelde woordmerk-variant (RINSE / BOMMERSON) voor grote weergave. */
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
            'font-display font-semibold uppercase tracking-label',
            stacked ? 'mt-1 text-[0.6rem]' : 'text-[0.52rem]',
            variant === 'light' ? 'text-steen' : 'text-steen',
          )}
        >
          Photography
        </span>
      </span>
    </Link>
  );
}
