'use client';

import { Moon, Sun } from 'lucide-react';

import { useTheme } from '@/components/theme/theme-provider';
import { cn } from '@/lib/utils';

/**
 * Colour-theme toggle. Both icons are always rendered and shown/hidden with the
 * `dark:` / `light:` class variants (no JS gate) so there's no hydration
 * mismatch and no flash on first paint.
 */
export function ThemeToggle({ className }: { className?: string }) {
  const { toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle colour theme"
      className={cn(
        'inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-pill border border-border bg-surface text-text transition-colors duration-200 hover:border-accent/50 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50',
        className,
      )}
    >
      <Sun className="hidden h-[18px] w-[18px] light:block" aria-hidden="true" />
      <Moon className="hidden h-[18px] w-[18px] dark:block" aria-hidden="true" />
    </button>
  );
}
