import { BRAND_ALT, LOGOS } from '@/lib/brand';
import { cn } from '@/lib/utils';

type LogoProps = {
  variant?: 'default' | 'onDark';
  layout?: 'compact' | 'full';
  size?: 'default' | 'lg';
  showTagline?: boolean;
  className?: string;
};

// Source logos are ~1.26:1 (square-ish) — size by max-height + w-auto so the mark
// isn't horizontally crushed. Copied verbatim from the Nuxt AppLogo.
const fullLogoClasses = {
  default:
    'h-auto w-auto max-h-[72px] max-w-[55vw] shrink-0 object-contain object-left min-[400px]:max-h-[88px] sm:max-h-[100px]',
  lg: 'h-auto w-auto max-h-[52px] max-w-[42vw] shrink-0 object-contain object-left min-[400px]:max-h-[64px] min-[640px]:max-h-[80px] min-[981px]:max-h-[108px] min-[981px]:max-w-[220px]',
} satisfies Record<'default' | 'lg', string>;

const TAGLINE = 'Map · Track · Connect';

/** Port of the Nuxt `AppLogo`. Plain <img> (no next/image — Cloudflare Workers). */
export function Logo({
  variant = 'default',
  layout = 'compact',
  size = 'default',
  showTagline = false,
  className,
}: LogoProps) {
  const taglineClasses =
    'font-mono text-2xs font-medium uppercase tracking-[0.16em] text-accent min-[400px]:tracking-[0.16em]';

  if (layout === 'full') {
    return (
      <span
        className={cn(
          'flex min-w-0 items-center gap-2.5 min-[400px]:gap-3',
          showTagline && 'flex-col items-start min-[400px]:flex-row min-[400px]:items-center',
          className,
        )}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={variant === 'onDark' ? LOGOS.wordmarkOnDark : LOGOS.wordmark}
          width={335}
          height={266}
          alt={BRAND_ALT}
          className={cn('!h-auto !w-auto', fullLogoClasses[size])}
          style={{ aspectRatio: '3355 / 2660' }}
        />
        {showTagline ? (
          <small className={cn('hidden min-[400px]:block', taglineClasses)}>{TAGLINE}</small>
        ) : null}
      </span>
    );
  }

  return (
    <span className={cn('flex min-w-0 items-center gap-2.5 min-[400px]:gap-3', className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={LOGOS.compact}
        width={38}
        height={38}
        alt={BRAND_ALT}
        className="h-[38px] w-[38px] shrink-0 object-contain"
      />
      <span
        className={cn(
          'min-w-0 font-display text-[15px] font-extrabold leading-tight min-[400px]:text-[17px] sm:text-[19px]',
          variant === 'onDark' ? 'text-white' : 'text-ink',
        )}
      >
        <span className="block truncate">Location Technologies</span>
        {showTagline ? (
          <small className={cn('mt-px hidden min-[400px]:block', taglineClasses)}>{TAGLINE}</small>
        ) : null}
      </span>
    </span>
  );
}
