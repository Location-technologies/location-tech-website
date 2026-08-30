import { cn } from '@/lib/utils';

type BadgeTone = 'default' | 'accent' | 'success' | 'warn';

type BadgeProps = {
  tone?: BadgeTone;
  className?: string;
  children?: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<'span'>, 'className' | 'children'>;

const toneClasses = {
  default: 'border-border bg-surface text-text-muted',
  accent: 'border-accent/30 bg-accent/10 text-accent',
  success: 'border-success/30 bg-success/10 text-success',
  warn: 'border-warn/30 bg-warn/10 text-warn',
} satisfies Record<BadgeTone, string>;

/** Small pill for statuses / tags. */
export function Badge({ tone = 'default', className, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-pill border px-2.5 py-1 font-mono text-2xs uppercase tracking-[0.12em]',
        toneClasses[tone],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
