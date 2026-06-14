import { cn } from '@/lib/utils';

/**
 * SIGNATURE ELEMENT — "Het Kader".
 * Hoekhaakjes die een element inkaderen, als een zoeker/viewfinder.
 * Metafoor voor wat Rinse doet: bepalen hoe je gekaderd wordt.
 *
 * Gebruik `hover` om de haken pas te tonen bij hover van een parent met `.group`
 * (bijv. portfolio-items).
 */
type FrameProps = {
  children: React.ReactNode;
  className?: string;
  size?: number;
  inset?: number;
  color?: 'inkt' | 'papier' | 'signaal';
  hover?: boolean;
};

const colorMap = {
  inkt: 'border-inkt',
  papier: 'border-papier',
  signaal: 'border-signaal',
} as const;

export function Frame({
  children,
  className,
  size = 22,
  inset = 14,
  color = 'inkt',
  hover = false,
}: FrameProps) {
  const corner = cn('absolute block border-signaal', colorMap[color]);
  const dim = { width: size, height: size };

  return (
    <div className={cn('relative', className)}>
      {children}
      <div
        aria-hidden="true"
        className={cn(
          'pointer-events-none absolute',
          hover &&
            'scale-[0.97] opacity-0 transition-all duration-500 ease-editorial group-hover:scale-100 group-hover:opacity-100',
        )}
        style={{ inset }}
      >
        <span className={cn(corner, 'left-0 top-0 border-l-[1.5px] border-t-[1.5px]')} style={dim} />
        <span className={cn(corner, 'right-0 top-0 border-r-[1.5px] border-t-[1.5px]')} style={dim} />
        <span
          className={cn(corner, 'bottom-0 left-0 border-b-[1.5px] border-l-[1.5px]')}
          style={dim}
        />
        <span
          className={cn(corner, 'bottom-0 right-0 border-b-[1.5px] border-r-[1.5px]')}
          style={dim}
        />
      </div>
    </div>
  );
}
