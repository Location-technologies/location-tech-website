'use client';

import Link from 'next/link';

import { motion, useReducedMotion } from 'framer-motion';

import { Container } from '@/components/ui/container';

type PageHeroProps = {
  breadcrumb: string;
  headingLight: string;
  headingGradient: string;
  subtitle: string;
};

const HERO_MASK = 'radial-gradient(ellipse 70% 90% at 50% 40%, #000 20%, transparent 75%)';

/** Port of the Nuxt `PageHero` (`BasePageHero`). */
export function PageHero({ breadcrumb, headingLight, headingGradient, subtitle }: PageHeroProps) {
  const reduce = useReducedMotion();
  const fade = (y = 0) =>
    reduce
      ? { initial: false as const }
      : { initial: { opacity: 0, y }, animate: { opacity: 1, y: 0 } };

  return (
    <section className="relative flex min-h-[44vh] flex-col items-center justify-center overflow-hidden bg-ink py-[150px] pb-[70px] text-center min-[400px]:min-h-[46vh]">
      <div
        className="dot-layer"
        style={{ maskImage: HERO_MASK, WebkitMaskImage: HERO_MASK }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/2 top-[-160px] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-accent/15 blur-[90px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-[-160px] right-[8%] h-[360px] w-[360px] rounded-full bg-accent-2/10 blur-[90px]"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <motion.nav
          {...fade()}
          transition={{ duration: 0.5 }}
          className="mb-[22px] flex items-center justify-center gap-2.5 text-sm text-text-muted"
        >
          <Link href="/" className="text-text-muted transition-colors hover:text-accent">
            Home
          </Link>
          <span className="text-white/25">›</span>
          <span className="text-accent">{breadcrumb}</span>
        </motion.nav>

        <motion.h1
          {...fade(12)}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="font-display text-h1 font-bold leading-[1.08] tracking-tight text-white"
        >
          {headingLight}
          <span className="gradient-text-hero">{headingGradient}</span>
        </motion.h1>

        <motion.p
          {...fade()}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="mx-auto mt-[22px] max-w-[620px] text-hero-sub text-text-muted"
        >
          {subtitle}
        </motion.p>
      </Container>
    </section>
  );
}
