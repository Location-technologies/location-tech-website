'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

const base =
  'relative py-1.5 text-[15px] font-medium text-neutral-300 transition-colors duration-200 hover:text-accent after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:rounded-sm after:bg-gradient-to-r after:from-accent after:to-accent-2 after:transition-[width] after:duration-300 hover:after:w-full';

const activeClasses = '!text-text after:!w-full';

const mobileBase =
  'border-b border-white/[0.06] py-3.5 font-display text-2xl font-bold text-neutral-100 transition-colors hover:text-accent';

const mobileActive = '!text-accent';

function isActive(pathname: string, href: string): boolean {
  return href === '/' ? pathname === '/' : pathname.startsWith(href);
}

export function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  return (
    <Link href={href} className={cn(base, isActive(pathname, href) && activeClasses)}>
      {label}
    </Link>
  );
}

export function MobileNavLink({
  href,
  label,
  onNavigate,
}: {
  href: string;
  label: string;
  onNavigate: () => void;
}) {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={cn(mobileBase, isActive(pathname, href) && mobileActive)}
    >
      {label}
    </Link>
  );
}
