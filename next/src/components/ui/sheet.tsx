'use client';

import * as DialogPrimitive from '@radix-ui/react-dialog';
import { X } from 'lucide-react';

import { cn } from '@/lib/utils';

export const Sheet = DialogPrimitive.Root;
export const SheetTrigger = DialogPrimitive.Trigger;
export const SheetClose = DialogPrimitive.Close;

type Side = 'right' | 'left' | 'bottom';

const sideClasses = {
  right:
    'inset-y-0 right-0 h-full w-[88vw] max-w-sm border-l data-[state=closed]:translate-x-full data-[state=open]:translate-x-0',
  left: 'inset-y-0 left-0 h-full w-[88vw] max-w-sm border-r data-[state=closed]:-translate-x-full data-[state=open]:translate-x-0',
  bottom:
    'inset-x-0 bottom-0 max-h-[85vh] w-full rounded-t-card border-t data-[state=closed]:translate-y-full data-[state=open]:translate-y-0',
} satisfies Record<Side, string>;

type SheetContentProps = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & {
  side?: Side;
};

export function SheetContent({ side = 'right', className, children, ...props }: SheetContentProps) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-ink/60 backdrop-blur-sm transition-opacity data-[state=closed]:opacity-0 data-[state=open]:opacity-100" />
      <DialogPrimitive.Content
        className={cn(
          'fixed z-50 border-border bg-surface p-6 text-text shadow-card-hover transition-transform duration-300 ease-emphasis focus:outline-none',
          sideClasses[side],
          className,
        )}
        {...props}
      >
        {children}
        <DialogPrimitive.Close
          aria-label="Close"
          className="absolute right-4 top-4 rounded-sm text-text-muted transition-colors hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
        >
          <X className="h-4 w-4" />
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
}

export function SheetTitle({ className, ...props }: React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title className={cn('font-display text-xl font-bold text-text', className)} {...props} />
  );
}

export function SheetDescription({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description className={cn('mt-2 text-sm text-text-muted', className)} {...props} />
  );
}
