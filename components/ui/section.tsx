import { cn } from '@/lib/utils';

type SectionProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
  /** Achtergrond-/tekstkleur-thema. */
  tone?: 'papier' | 'wolk' | 'inkt';
  /** Verticale ademruimte. */
  spacing?: 'default' | 'tight' | 'none';
};

const tones: Record<NonNullable<SectionProps['tone']>, string> = {
  papier: 'bg-papier text-inkt',
  wolk: 'bg-wolk text-inkt',
  inkt: 'bg-inkt text-papier',
};

const spacings: Record<NonNullable<SectionProps['spacing']>, string> = {
  default: 'py-24 sm:py-28 lg:py-36',
  tight: 'py-16 sm:py-20',
  none: '',
};

export function Section({
  id,
  className,
  children,
  tone = 'papier',
  spacing = 'default',
}: SectionProps) {
  return (
    <section id={id} className={cn(tones[tone], spacings[spacing], 'scroll-mt-24', className)}>
      {children}
    </section>
  );
}
