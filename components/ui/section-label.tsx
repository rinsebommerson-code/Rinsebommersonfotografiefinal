import { cn } from '@/lib/utils';

/**
 * Redactioneel inhoudsopgave-label: "01 — DE KLOOF" met hairline.
 * Onderdeel van het inhoudsopgave-motief door de hele site.
 */
export function SectionLabel({
  index,
  children,
  rule = true,
  className,
}: {
  index?: string;
  children: React.ReactNode;
  rule?: boolean;
  className?: string;
}) {
  return (
    <div className={cn('flex items-center gap-4', className)}>
      <span className="label-track shrink-0">
        {index ? <span className="text-signaal">{index}</span> : null}
        {index ? <span className="mx-2 opacity-40">—</span> : null}
        {children}
      </span>
      {rule ? <span className="h-px flex-1 bg-current opacity-15" aria-hidden="true" /> : null}
    </div>
  );
}
