'use client';

import { Eyebrow } from '@/components/ui/eyebrow';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { cn } from '@/lib/utils';

type SectionHeaderProps = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  children?: React.ReactNode;
};

/**
 * Port of the Nuxt `BaseSectionHeader`. Reveals on scroll (one-shot); renders
 * immediately during SSR and under `prefers-reduced-motion`.
 */
export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = false,
  className,
  children,
}: SectionHeaderProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn(
        'mb-12 transition-all duration-700',
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
        centered && 'text-center',
        className,
      )}
    >
      {eyebrow ? <Eyebrow className="mb-3 block">{eyebrow}</Eyebrow> : null}
      <h2 className="mt-3.5 inline-block font-display text-h2 font-bold tracking-tight text-text">
        {children ?? title}
      </h2>
      {subtitle ? (
        <p
          className={cn('mt-5 max-w-2xl text-md leading-[1.6] text-text-muted', centered && 'mx-auto')}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
