import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kitchen Sink',
  description: 'Every design-system component in light + dark.',
  robots: { index: false, follow: false },
};

// The root layout already provides fonts, the theme script, and <ThemeProvider>.
export default function KitchenSinkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
