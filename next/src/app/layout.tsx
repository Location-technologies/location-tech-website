import type { Metadata } from 'next';

import { ThemeProvider } from '@/components/theme/theme-provider';
import { ThemeScript } from '@/components/theme/theme-script';
import { fontBody, fontDisplay, fontMono } from '@/lib/fonts';
import { cn } from '@/lib/utils';

import './globals.css';

export const metadata: Metadata = {
  title: 'Location Technologies',
  description: 'Location Technologies — migration in progress.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      // Font vars go on <html> so body-mounted portals (Radix) inherit them.
      // Static `dark` is the JS-disabled fallback; ThemeScript reconciles the rest.
      className={cn(fontDisplay.variable, fontBody.variable, fontMono.variable, 'dark')}
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
      </head>
      <body className="min-h-dvh bg-bg font-sans text-text antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
