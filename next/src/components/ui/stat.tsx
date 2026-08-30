import { cn } from '@/lib/utils';

type StatProps = {
  value: React.ReactNode;
  label: string;
  sublabel?: string;
  className?: string;
};

/** Big number over a mono label — for stat rows. */
export function Stat({ value, label, sublabel, className }: StatProps) {
  return (
    <div className={cn('flex flex-col gap-1', className)}>
      <span className="font-display text-3xl font-bold text-text">{value}</span>
      <span className="font-mono text-2xs uppercase tracking-[0.14em] text-text-muted">{label}</span>
      {sublabel ? <span className="text-sm text-text-muted">{sublabel}</span> : null}
    </div>
  );
}
