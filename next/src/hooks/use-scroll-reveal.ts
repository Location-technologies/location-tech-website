'use client';

import { useEffect, useRef, useState } from 'react';

import { useMediaQuery } from '@/hooks/use-media-query';

/**
 * One-shot scroll-in reveal. Port of the Nuxt `useScrollReveal` composable.
 *
 * - `isVisible` is `true` during SSR / first paint (so markup matches the server)
 *   and whenever `prefers-reduced-motion: reduce`.
 * - After mount it flips to observer-driven: `true` once the element has crossed
 *   15% into the viewport, and never back to `false`.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);
  const [mounted, setMounted] = useState(false);
  const [intersected, setIntersected] = useState(false);
  const reduced = useMediaQuery('(prefers-reduced-motion: reduce)');

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const node = ref.current;
    if (!node || intersected) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setIntersected(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [intersected]);

  const isVisible = !mounted || reduced ? true : intersected;

  return { ref, isVisible };
}
