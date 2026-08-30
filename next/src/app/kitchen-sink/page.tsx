import { ArrowRight } from 'lucide-react';

import { Reveal, Stagger, StaggerItem } from '@/components/motion';
import { Parallax } from '@/components/motion/parallax';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Container } from '@/components/ui/container';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Eyebrow } from '@/components/ui/eyebrow';
import { Field } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Link } from '@/components/ui/link';
import { Navbar } from '@/components/ui/navbar';
import { PageHero } from '@/components/ui/page-hero';
import { SectionHeader } from '@/components/ui/section-header';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Stat } from '@/components/ui/stat';
import { Textarea } from '@/components/ui/textarea';
import { ThemeToggle } from '@/components/ui/theme-toggle';

import { ThemeMatrix } from './theme-matrix';

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-border py-12">
      <h2 className="mb-6 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
        {title}
      </h2>
      {children}
    </section>
  );
}

const SWATCHES: { name: string; className: string }[] = [
  { name: 'bg', className: 'bg-bg' },
  { name: 'surface', className: 'bg-surface' },
  { name: 'surface-raised', className: 'bg-surface-raised' },
  { name: 'accent', className: 'bg-accent' },
  { name: 'accent-2', className: 'bg-accent-2' },
  { name: 'success', className: 'bg-success' },
  { name: 'warn', className: 'bg-warn' },
  { name: 'border', className: 'bg-border' },
];

const NEUTRALS: { n: number; className: string }[] = [
  { n: 50, className: 'bg-neutral-50' },
  { n: 100, className: 'bg-neutral-100' },
  { n: 200, className: 'bg-neutral-200' },
  { n: 300, className: 'bg-neutral-300' },
  { n: 400, className: 'bg-neutral-400' },
  { n: 500, className: 'bg-neutral-500' },
  { n: 700, className: 'bg-neutral-700' },
  { n: 800, className: 'bg-neutral-800' },
  { n: 900, className: 'bg-neutral-900' },
  { n: 950, className: 'bg-neutral-950' },
];

const TYPE_SCALE: { token: string; label: string }[] = [
  { token: 'text-h2', label: 'Display H2' },
  { token: 'text-3xl', label: '3xl' },
  { token: 'text-2xl', label: '2xl' },
  { token: 'text-xl', label: 'xl' },
  { token: 'text-lg', label: 'lg' },
  { token: 'text-md', label: 'md' },
  { token: 'text-base', label: 'base' },
  { token: 'text-sm', label: 'sm' },
  { token: 'text-xs', label: 'xs' },
];

export default function KitchenSinkPage() {
  return (
    <div className="min-h-dvh bg-bg text-text">
      <div className="sticky top-0 z-30 flex items-center justify-between border-b border-border bg-bg/90 px-4 py-3 backdrop-blur-md sm:px-8">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted">
          Kitchen Sink
        </span>
        <ThemeToggle />
      </div>

      <Container className="py-10">
        <h1 className="font-display text-h2 font-bold tracking-tight">Design system</h1>
        <p className="mt-3 max-w-2xl text-md text-text-muted">
          Every component in light + dark. Tokens are the single source of colour — no hard-coded
          hex anywhere below.
        </p>

        <Section title="Tokens — semantic">
          <ThemeMatrix>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {SWATCHES.map((s) => (
                <div key={s.name}>
                  <div className={`h-14 rounded-md border border-border ${s.className}`} />
                  <p className="mt-1.5 font-mono text-2xs text-text-muted">{s.name}</p>
                </div>
              ))}
            </div>
          </ThemeMatrix>
        </Section>

        <Section title="Tokens — neutral ramp + gradients">
          <div className="flex flex-wrap gap-2">
            {NEUTRALS.map((item) => (
              <div key={item.n} className="text-center">
                <div
                  className={`h-12 w-12 rounded-md border border-border ${item.className}`}
                />
                <p className="mt-1 font-mono text-2xs text-text-muted">{item.n}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 space-y-2">
            <div className="h-10 rounded-md gradient-bg" />
            <p className="gradient-text text-2xl font-bold">gradient-text</p>
            <p className="gradient-text-hero text-2xl font-bold">gradient-text-hero</p>
          </div>
        </Section>

        <Section title="Typography">
          <ThemeMatrix>
            <div className="space-y-3">
              {TYPE_SCALE.map((t) => (
                <p key={t.token} className={`${t.token} font-display font-bold`}>
                  {t.label} — Location Technologies
                </p>
              ))}
              <p className="text-base">
                Body — Inter Tight. The quick brown fox jumps over the lazy dog.
              </p>
              <p className="font-mono text-sm uppercase tracking-[0.14em] text-text-muted">
                Mono — IBM Plex Mono label
              </p>
            </div>
          </ThemeMatrix>
        </Section>

        <Section title="Button">
          <ThemeMatrix>
            <div className="flex flex-wrap items-center gap-3">
              <Button variant="primary">Primary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="dark">Dark</Button>
              <Button variant="link">Link</Button>
              <Button variant="primary" icon={<ArrowRight className="h-4 w-4" />}>
                With icon
              </Button>
              <Button variant="ghost" to="/kitchen-sink">
                As link
              </Button>
              <Button variant="primary" disabled>
                Disabled
              </Button>
            </div>
          </ThemeMatrix>
        </Section>

        <Section title="Card">
          <ThemeMatrix>
            <div className="grid gap-4 sm:grid-cols-3">
              {(['light', 'glass', 'dark'] as const).map((v) => (
                <Card key={v} variant={v}>
                  <p className="font-display text-lg font-bold text-text">{v}</p>
                  <p className="mt-1 text-sm text-text-muted">Hover me.</p>
                </Card>
              ))}
            </div>
          </ThemeMatrix>
        </Section>

        <Section title="SectionHeader">
          <ThemeMatrix>
            <SectionHeader
              eyebrow="Capabilities"
              title="What we build"
              subtitle="A calm workhorse subtitle that wraps to two lines at this width to show the measure."
            />
            <SectionHeader
              centered
              eyebrow="Centered"
              title="Centered variant"
              subtitle="Same component, centered prop."
            />
          </ThemeMatrix>
        </Section>

        <Section title="PageHero (dark by design — one bold move)">
          <div className="overflow-hidden rounded-card border border-border">
            <PageHero
              breadcrumb="Services"
              headingLight="We map, track and "
              headingGradient="connect"
              subtitle="Full-stack GIS, SaaS and cloud infrastructure for enterprises across Pakistan."
            />
          </div>
        </Section>

        <Section title="Eyebrow · Badge · Stat">
          <ThemeMatrix>
            <div className="space-y-4">
              <Eyebrow>Eyebrow label</Eyebrow>
              <div className="flex flex-wrap gap-2">
                <Badge>default</Badge>
                <Badge tone="accent">accent</Badge>
                <Badge tone="success">success</Badge>
                <Badge tone="warn">warn</Badge>
              </div>
              <div className="flex gap-8">
                <Stat value="2019" label="Founded" />
                <Stat value="40+" label="Projects" sublabel="and counting" />
              </div>
            </div>
          </ThemeMatrix>
        </Section>

        <Section title="Input · Textarea · Field">
          <ThemeMatrix>
            <div className="space-y-4">
              <Field label="Full name">
                <Input placeholder="Ada Lovelace" />
              </Field>
              <Field label="Email" error="Enter a valid email address.">
                <Input type="email" defaultValue="not-an-email" />
              </Field>
              <Field label="Message" hint="A sentence or two is plenty.">
                <Textarea placeholder="Tell us about the project…" />
              </Field>
            </div>
          </ThemeMatrix>
        </Section>

        <Section title="Link (Tab to see the focus ring)">
          <ThemeMatrix>
            <p className="text-sm text-text-muted">
              An <Link href="/kitchen-sink">internal link</Link> and an{' '}
              <Link href="https://locationtechnologies.io">external link</Link>.
            </p>
          </ThemeMatrix>
        </Section>

        <Section title="Dialog">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="primary">Open dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogTitle>Delete project?</DialogTitle>
              <DialogDescription>
                This can’t be undone. Focus is trapped here — press Esc or Tab to a control.
              </DialogDescription>
              <div className="mt-5 flex justify-end gap-3">
                <DialogClose asChild>
                  <Button variant="dark">Cancel</Button>
                </DialogClose>
                <DialogClose asChild>
                  <Button variant="primary">Delete</Button>
                </DialogClose>
              </div>
            </DialogContent>
          </Dialog>
        </Section>

        <Section title="Sheet">
          <div className="flex gap-3">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost">Sheet — right</Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetTitle>Right sheet</SheetTitle>
                <SheetDescription>Slides in from the edge.</SheetDescription>
                <SheetClose asChild>
                  <Button variant="dark" className="mt-5">
                    Close
                  </Button>
                </SheetClose>
              </SheetContent>
            </Sheet>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost">Sheet — bottom</Button>
              </SheetTrigger>
              <SheetContent side="bottom">
                <SheetTitle>Bottom sheet</SheetTitle>
                <SheetDescription>Good for mobile actions.</SheetDescription>
              </SheetContent>
            </Sheet>
          </div>
        </Section>

        <Section title="Motion primitives (respect prefers-reduced-motion)">
          <div className="space-y-6">
            <Reveal>
              <Card variant="glass">
                <p className="text-sm">&lt;Reveal&gt; — fades + rises once on scroll-in.</p>
              </Card>
            </Reveal>
            <Stagger className="grid gap-3 sm:grid-cols-3">
              {['One', 'Two', 'Three'].map((n) => (
                <StaggerItem key={n}>
                  <Card variant="glass">
                    <p className="text-sm">{n}</p>
                  </Card>
                </StaggerItem>
              ))}
            </Stagger>
            <div className="h-40 overflow-hidden rounded-card border border-border">
              <Parallax className="flex h-full items-center justify-center">
                <p className="font-display text-2xl font-bold">&lt;Parallax&gt;</p>
              </Parallax>
            </div>
          </div>
        </Section>

        <Section title="Navbar (framed so its fixed position is contained)">
          <div className="relative h-[420px] overflow-hidden rounded-card border border-border bg-ink">
            <Navbar />
          </div>
        </Section>

        <Section title="ThemeToggle">
          <ThemeMatrix>
            <ThemeToggle />
          </ThemeMatrix>
        </Section>
      </Container>
    </div>
  );
}
