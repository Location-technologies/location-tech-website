'use client';

import { useRef } from 'react';

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';

type ParallaxProps = {
  children: React.ReactNode;
  /** Total travel in px across the element's scroll through the viewport. */
  distance?: number;
  className?: string;
};

/** Vertical parallax tied to scroll position. Static under reduced-motion. */
export function Parallax({ children, distance = 60, className }: ParallaxProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);

  if (reduce) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}
