'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { Container } from '@/components/ui/container';
import { Logo } from '@/components/ui/logo';
import { MobileNav } from '@/components/ui/mobile-nav';
import { NavLink } from '@/components/ui/nav-link';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { useWindowScroll } from '@/hooks/use-window-scroll';
import { NAV_LINKS } from '@/lib/brand';
import { cn } from '@/lib/utils';

/** Port of the Nuxt `TheNavbar` — 1:1 behaviour, restyled to tokens. */
export function Navbar() {
  const scrolled = useWindowScroll() > 30;
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  // Close the mobile panel whenever the route changes.
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Lock body scroll while the panel is open; also resets on unmount.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-[100] border-b transition-all duration-[350ms] ease-out',
          scrolled
            ? 'border-accent/15 bg-ink/[0.78] py-2.5 shadow-[0_12px_40px_-22px_rgb(0_0_0/0.8)] backdrop-blur-[16px] backdrop-saturate-[140%]'
            : 'border-transparent bg-transparent py-4',
        )}
      >
        <Container className="flex items-center justify-between gap-3">
          <Link href="/" className="shrink-0" aria-label="Location Technologies — home">
            <Logo layout="full" size="lg" variant="onDark" />
          </Link>

          <ul className="hidden items-center gap-[38px] min-[981px]:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <NavLink href={link.href} label={link.label} />
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-[18px] min-[981px]:flex">
            <ThemeToggle />
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 whitespace-nowrap rounded-pill gradient-bg px-[30px] py-[15px] text-base font-semibold text-on-accent shadow-[0_8px_28px_-8px_rgb(0_180_216/0.55)] transition-all duration-[250ms] hover:scale-105 hover:shadow-[0_14px_38px_-8px_rgb(0_200_150/0.6)]"
            >
              Get in Touch
            </Link>
          </div>

          <button
            type="button"
            aria-expanded={mobileOpen}
            aria-label="Menu"
            onClick={() => setMobileOpen((open) => !open)}
            className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-[11px] border border-white/20 bg-white/[0.04] min-[981px]:hidden"
          >
            <span
              className={cn(
                'block h-0.5 w-5 rounded-sm bg-white transition-all duration-300',
                mobileOpen && 'translate-y-[7px] rotate-45',
              )}
            />
            <span
              className={cn(
                'block h-0.5 w-5 rounded-sm bg-white transition-all duration-300',
                mobileOpen && 'opacity-0',
              )}
            />
            <span
              className={cn(
                'block h-0.5 w-5 rounded-sm bg-white transition-all duration-300',
                mobileOpen && '-translate-y-[7px] -rotate-45',
              )}
            />
          </button>
        </Container>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
