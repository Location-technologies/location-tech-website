import { cn } from '@/lib/utils';

type EyebrowProps = {
  className?: string;
  children?: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<'span'>, 'className' | 'children'>;

/** Small mono label above a heading. */
export function Eyebrow({ className, children, ...props }: EyebrowProps) {
  return (
    <span
      className={cn(
        'font-mono text-2xs font-semibold uppercase tracking-[0.18em] text-accent',
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
