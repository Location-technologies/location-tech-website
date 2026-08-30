import NextLink from 'next/link';

import { cn } from '@/lib/utils';

type Variant = 'primary' | 'ghost' | 'dark' | 'link';

type BaseProps = {
  variant?: Variant;
  icon?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
};

type LinkProps = BaseProps & {
  to: string;
} & Omit<React.ComponentPropsWithoutRef<typeof NextLink>, 'href' | keyof BaseProps>;

type NativeButtonProps = BaseProps & {
  to?: undefined;
} & Omit<React.ComponentPropsWithoutRef<'button'>, keyof BaseProps>;

export type ButtonProps = LinkProps | NativeButtonProps;

const baseClasses =
  'inline-flex items-center justify-center rounded-pill px-6 py-3 font-semibold text-sm tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 disabled:pointer-events-none disabled:opacity-60';

const variantClasses = {
  primary:
    'gradient-bg text-on-accent shadow-[var(--shadow-glow-cyan)] hover:shadow-card-hover hover:scale-105',
  ghost: 'border-2 border-accent text-accent hover:bg-accent hover:text-on-accent',
  dark: 'border border-border bg-surface text-text hover:border-accent/50',
  link: 'rounded-none px-0 py-0 text-accent shadow-none underline-offset-4 hover:underline',
} satisfies Record<Variant, string>;

/**
 * Port of the Nuxt `BaseButton`. Renders `next/link` when `to` is set, otherwise
 * a `<button>`. `icon` is a rendered node (was an `mdi:` name in Vue).
 */
export function Button({ variant = 'primary', icon, className, children, ...rest }: ButtonProps) {
  const classes = cn(baseClasses, variantClasses[variant], className);
  const content = (
    <>
      {children}
      {icon ? <span className="ml-2 inline-flex h-4 w-4 shrink-0 items-center">{icon}</span> : null}
    </>
  );

  if (rest.to != null) {
    const { to, ...linkProps } = rest as LinkProps;
    return (
      <NextLink href={to} className={classes} {...linkProps}>
        {content}
      </NextLink>
    );
  }

  const buttonProps = rest as Omit<NativeButtonProps, 'to'>;
  return (
    <button {...buttonProps} type={buttonProps.type ?? 'button'} className={classes}>
      {content}
    </button>
  );
}
