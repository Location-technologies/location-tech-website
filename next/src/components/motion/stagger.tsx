'use client';

import { motion, useReducedMotion } from 'framer-motion';

type StaggerProps = {
  children: React.ReactNode;
  /** Gap between each child's entrance, in seconds. */
  gap?: number;
  className?: string;
};

/** Container that reveals its `<StaggerItem>` children in sequence on scroll-in. */
export function Stagger({ children, gap = 0.08, className }: StaggerProps) {
  const reduce = useReducedMotion();

  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, amount: 0.2 }}
      variants={{ shown: { transition: { staggerChildren: gap } } }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  y = 16,
  className,
}: {
  children: React.ReactNode;
  y?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();

  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        shown: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
      }}
    >
      {children}
    </motion.div>
  );
}
