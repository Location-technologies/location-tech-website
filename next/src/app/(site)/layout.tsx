import { Footer } from '@/components/ui/footer';
import { Navbar } from '@/components/ui/navbar';

// Marketing route group — fixed Navbar + Footer chrome around every (site) page.
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="min-h-dvh">{children}</main>
      <Footer />
    </>
  );
}
