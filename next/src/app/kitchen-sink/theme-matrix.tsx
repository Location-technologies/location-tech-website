import { cn } from '@/lib/utils';

/**
 * Renders the same subtree twice — once in a forced `.light` scope, once in
 * `.dark` — so every component can be eyeballed in both themes at once. Works
 * because the colour tokens are scoped to the `.light` / `.dark` selectors, so a
 * nested wrapper re-resolves every `var()`.
 */
export function ThemeMatrix({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="grid gap-4 min-[900px]:grid-cols-2">
      {(['light', 'dark'] as const).map((theme) => (
        <div
          key={theme}
          className={cn(theme, 'rounded-card border border-border bg-bg p-6 text-text', className)}
        >
          <p className="mb-4 font-mono text-2xs uppercase tracking-[0.14em] text-text-muted">
            {theme}
          </p>
          {children}
        </div>
      ))}
    </div>
  );
}
