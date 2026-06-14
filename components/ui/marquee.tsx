import { cn } from '@/lib/utils';

/**
 * Doorlopende tekststrip (CSS-animatie). Decoratief, dus aria-hidden.
 * Staat stil bij prefers-reduced-motion (zie globals.css).
 */
export function Marquee({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  const loop = [...items, ...items];
  return (
    <div className={cn('flex w-full overflow-hidden', className)} aria-hidden="true">
      <div className="flex shrink-0 animate-marquee items-center whitespace-nowrap">
        {loop.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="px-7 font-display text-sm font-semibold uppercase tracking-label">
              {item}
            </span>
            <span className="text-signaal">&#9670;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
