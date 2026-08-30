import Link from 'next/link';

import { Mail, MapPin, Phone } from 'lucide-react';

import { Container } from '@/components/ui/container';
import { Logo } from '@/components/ui/logo';
import {
  CONTACT,
  FOOTER_BLURB,
  FOOTER_SERVICES,
  NAV_LINKS,
  POLICY_LINKS,
  SOCIALS,
} from '@/lib/brand';

function LinkedInGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.24zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

const linkClasses =
  'text-sm text-text-muted transition-colors duration-200 hover:text-accent min-[400px]:text-[15px]';
const headingClasses = 'mb-4 font-display text-base font-bold text-white min-[400px]:mb-[22px]';

/** Port of the Nuxt `TheFooter` — 1:1 structure, restyled to tokens. */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="overflow-hidden border-t border-accent/10 bg-footer pt-12 text-white min-[400px]:pt-16 min-[981px]:pt-20">
      <Container>
        <div className="grid grid-cols-1 gap-8 min-[560px]:grid-cols-2 min-[560px]:gap-10 min-[981px]:grid-cols-[1.6fr_1fr_1.5fr_1fr_1.3fr] min-[981px]:gap-8">
          {/* Brand */}
          <div className="min-w-0 min-[560px]:col-span-2 min-[981px]:col-span-1">
            <Link href="/" className="mb-4 inline-block min-[400px]:mb-5">
              <Logo layout="full" />
            </Link>
            <p className="max-w-md text-sm leading-relaxed text-text-muted min-[400px]:max-w-[300px] min-[400px]:text-[15px]">
              {FOOTER_BLURB}
            </p>
            <div className="mt-5 flex gap-3 min-[400px]:mt-6">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="group flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-[11px] border border-white/10 bg-white/[0.04] transition-all duration-[250ms] hover:-translate-y-0.5 hover:border-transparent hover:gradient-bg"
                >
                  <LinkedInGlyph className="h-[18px] w-[18px] text-text-muted transition-colors duration-[250ms] group-hover:text-on-accent" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="min-w-0">
            <h4 className={headingClasses}>Quick Links</h4>
            <ul className="flex flex-col gap-3 min-[400px]:gap-[13px]">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClasses}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="min-w-0">
            <h4 className={headingClasses}>Legal</h4>
            <ul className="flex flex-col gap-3 min-[400px]:gap-[13px]">
              {POLICY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClasses}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="min-w-0">
            <h4 className={headingClasses}>Services</h4>
            <ul className="flex flex-col gap-3 min-[400px]:gap-[13px]">
              {FOOTER_SERVICES.map((service) => (
                <li key={service.label}>
                  <Link href={service.href} className={linkClasses}>
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch */}
          <div className="min-w-0 min-[560px]:col-span-2 min-[981px]:col-span-1">
            <h4 className={headingClasses}>Get in Touch</h4>
            <ul className="flex flex-col gap-3 min-[400px]:gap-[13px]">
              <li className="flex items-start gap-3 text-sm leading-normal text-text-muted min-[400px]:text-[15px]">
                <Mail className="mt-0.5 h-[17px] w-[17px] shrink-0 text-accent" />
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="break-all transition-colors hover:text-accent min-[981px]:break-normal"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm leading-normal text-text-muted min-[400px]:text-[15px]">
                <Phone className="mt-0.5 h-[17px] w-[17px] shrink-0 text-accent" />
                <a href={`tel:${CONTACT.phoneHref}`} className="transition-colors hover:text-accent">
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm leading-normal text-text-muted min-[400px]:text-[15px]">
                <MapPin className="mt-0.5 h-[17px] w-[17px] shrink-0 text-accent" />
                <span>
                  {CONTACT.addressLine1}
                  <br />
                  {CONTACT.addressLine2}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start gap-4 border-t border-white/[0.07] py-6 text-center text-xs text-text-muted min-[400px]:mt-12 min-[400px]:py-[26px] min-[400px]:text-sm min-[640px]:flex-row min-[640px]:items-center min-[640px]:justify-between min-[640px]:gap-3 min-[640px]:text-left">
          <span className="w-full min-[640px]:w-auto">
            &copy; {year} Location Technologies Private Limited. All rights reserved.
          </span>
          <span className="flex w-full items-center justify-center gap-2 text-accent-2 min-[640px]:w-auto min-[640px]:justify-end">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-[15px] w-[15px] shrink-0"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
              <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
              <path
                d="M12 3v3M12 18v3M3 12h3M18 12h3"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
            <span className="text-text-muted">Designed with precision</span>
          </span>
        </div>
      </Container>
    </footer>
  );
}
