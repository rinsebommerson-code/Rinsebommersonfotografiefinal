'use client';

import { useMemo, useState } from 'react';
import { shootTypes, type PortfolioItem, type ShootType } from '@/lib/data';
import { cn } from '@/lib/utils';
import { Photo } from '@/components/ui/photo';
import { Frame } from '@/components/ui/frame';

type Filter = 'Alles' | ShootType;

export function PortfolioGrid({
  items,
  showFilter = true,
}: {
  items: PortfolioItem[];
  showFilter?: boolean;
}) {
  const [active, setActive] = useState<Filter>('Alles');
  const filters: Filter[] = useMemo(() => ['Alles', ...shootTypes], []);

  const visible = active === 'Alles' ? items : items.filter((i) => i.type === active);

  return (
    <div>
      {showFilter && (
        <div
          role="group"
          aria-label="Filter portfolio op type shoot"
          className="mb-12 flex flex-wrap gap-2.5"
        >
          {filters.map((f) => {
            const isActive = active === f;
            return (
              <button
                key={f}
                type="button"
                onClick={() => setActive(f)}
                aria-pressed={isActive}
                className={cn(
                  'border px-5 py-2.5 font-display text-xs font-semibold uppercase tracking-wider transition-all duration-300 ease-editorial',
                  isActive
                    ? 'border-signaal bg-signaal text-white'
                    : 'border-inkt/20 text-inkt/70 hover:border-inkt hover:text-inkt',
                )}
              >
                {f}
              </button>
            );
          })}
        </div>
      )}

      <div className="gap-5 [column-gap:1.25rem] sm:columns-2 lg:columns-3">
        {visible.map((item) => (
          <figure key={item.id} className="group mb-5 break-inside-avoid">
            <Frame hover color="papier" inset={10} size={18}>
              <div className="overflow-hidden">
                <Photo
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  imgClassName="transition-transform duration-[1.1s] ease-editorial group-hover:scale-[1.04]"
                />
              </div>
              <div className="pointer-events-none absolute inset-0 bg-inkt/0 transition-colors duration-500 group-hover:bg-inkt/15" />
            </Frame>

            <figcaption className="mt-3 flex items-baseline justify-between gap-4">
              <span className="font-display text-sm font-bold leading-tight">{item.client}</span>
              <span className="label-track shrink-0 text-steen">{item.type}</span>
            </figcaption>
          </figure>
        ))}
      </div>

      {visible.length === 0 && (
        <p className="py-16 text-center font-body text-lg text-inkt/60">
          Binnenkort meer werk in deze categorie.
        </p>
      )}
    </div>
  );
}
