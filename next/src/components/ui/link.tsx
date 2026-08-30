import NextLink from 'next/link';

import { cn } from '@/lib/utils';

type LinkProps = {
  href: string;
  className?: string;
  children?: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<'a'>, 'href' | 'className' | 'children'>;

const baseClasses =
  'rounded-sm underline-offset-4 transition-colors duration-200 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50';

/**
 * App link with a visible focus ring. External hrefs (`http…`) render a plain
 * anchor with `target="_blank"` + `rel`; everything else uses `next/link`.
 */
export function Link({ href, className, children, ...props }: LinkProps) {
  const isExternal = /^https?:\/\//.test(href);

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(baseClasses, className)}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <NextLink href={href} className={cn(baseClasses, className)} {...props}>
      {children}
    </NextLink>
  );
}
