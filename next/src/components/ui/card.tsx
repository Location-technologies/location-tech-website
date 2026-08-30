import { cn } from '@/lib/utils';

type Variant = 'light' | 'glass' | 'dark';

type CardProps = {
  variant?: Variant;
  className?: string;
  children?: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<'div'>, 'className' | 'children'>;

const baseClasses = 'rounded-card p-6 transition-all duration-300';

const variantClasses = {
  light: 'border border-border bg-surface shadow-card hover:border-accent/30 hover:shadow-card-hover',
  glass: 'glass hover:border-accent/50 hover:shadow-[var(--shadow-glow-cyan)]',
  dark: 'border border-white/10 bg-ink/60 hover:border-accent/40',
} satisfies Record<Variant, string>;

/**
 * Port of the Nuxt `BaseCard`. Always carries the `group` class so children can
 * hook `group-hover:`. Variant names are style presets, not theme names.
 */
export function Card({ variant = 'light', className, children, ...props }: CardProps) {
  return (
    <div className={cn(baseClasses, variantClasses[variant], 'group', className)} {...props}>
      {children}
    </div>
  );
}
