'use client';

import Link from 'next/link';

import { MobileNavLink } from '@/components/ui/nav-link';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { NAV_LINKS } from '@/lib/brand';
import { cn } from '@/lib/utils';

type MobileNavProps = {
  open: boolean;
  onClose: () => void;
};

/** Full-width slide-down panel — sibling of the fixed <header>. */
export function MobileNav({ open, onClose }: MobileNavProps) {
  return (
    <div
      aria-hidden={!open}
      className={cn(
        'fixed inset-x-0 top-0 z-[99] flex flex-col gap-1.5 border-b border-accent/20 bg-ink/[0.97] px-5 pb-9 pt-24 backdrop-blur-[20px] transition-transform duration-[420ms] ease-emphasis sm:px-8 min-[981px]:hidden',
        open ? 'translate-y-0' : '-translate-y-[105%]',
      )}
    >
      {NAV_LINKS.map((link) => (
        <MobileNavLink key={link.href} href={link.href} label={link.label} onNavigate={onClose} />
      ))}

      <Link
        href="/contact"
        onClick={onClose}
        className="mt-[22px] inline-flex items-center justify-center gap-2.5 rounded-pill gradient-bg px-[30px] py-[15px] text-base font-semibold text-on-accent shadow-[0_8px_28px_-8px_rgb(0_180_216/0.55)] transition-all duration-[250ms] hover:scale-105 hover:shadow-[0_14px_38px_-8px_rgb(0_200_150/0.6)]"
      >
        Get in Touch
      </Link>

      <div className="mt-4">
        <ThemeToggle />
      </div>
    </div>
  );
}
