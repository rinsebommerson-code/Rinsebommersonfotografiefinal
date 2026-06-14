import Link from 'next/link';
import { cn } from '@/lib/utils';

type Variant = 'solid' | 'outline' | 'light';
type Size = 'md' | 'lg';

const base =
  'group/btn inline-flex items-center justify-center gap-2.5 font-display text-sm font-semibold uppercase tracking-wider transition-all duration-300 ease-editorial focus-visible:outline-offset-4 disabled:cursor-not-allowed disabled:opacity-50';

const variants: Record<Variant, string> = {
  // Signaalkleur — primaire CTA.
  solid: 'bg-signaal text-white hover:bg-inkt',
  // Outline op lichte achtergrond.
  outline: 'border border-inkt/25 text-inkt hover:border-inkt hover:bg-inkt hover:text-papier',
  // Voor donkere secties.
  light: 'border border-papier/30 text-papier hover:bg-papier hover:text-inkt',
};

const sizes: Record<Size, string> = {
  md: 'px-6 py-3',
  lg: 'px-8 py-4 text-[0.95rem]',
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsLink = CommonProps & {
  href: string;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps | 'href'>;

type ButtonAsButton = CommonProps & {
  href?: undefined;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps>;

type ButtonProps = ButtonAsLink | ButtonAsButton;

function Arrow() {
  return (
    <span
      aria-hidden="true"
      className="transition-transform duration-300 ease-editorial group-hover/btn:translate-x-1"
    >
      &rarr;
    </span>
  );
}

export function Button(props: ButtonProps) {
  const { variant = 'solid', size = 'md', arrow = false, className, children } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if (props.href !== undefined) {
    const { variant: _v, size: _s, arrow: _a, className: _c, children: _ch, href, ...rest } = props;
    const external = href.startsWith('http') || href.startsWith('mailto:');
    return (
      <Link
        href={href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...rest}
      >
        {children}
        {arrow ? <Arrow /> : null}
      </Link>
    );
  }

  const { variant: _v, size: _s, arrow: _a, className: _c, children: _ch, ...rest } = props;
  return (
    <button className={classes} {...rest}>
      {children}
      {arrow ? <Arrow /> : null}
    </button>
  );
}
