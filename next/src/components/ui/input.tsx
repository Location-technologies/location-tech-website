import { forwardRef } from 'react';

import { cn } from '@/lib/utils';

const fieldClasses =
  'w-full rounded-md border border-border bg-surface px-4 py-3 text-base text-text transition-colors duration-200 placeholder:text-text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 aria-[invalid=true]:border-warn disabled:cursor-not-allowed disabled:opacity-60';

export const Input = forwardRef<HTMLInputElement, React.ComponentPropsWithoutRef<'input'>>(
  function Input({ className, type = 'text', ...props }, ref) {
    return <input ref={ref} type={type} className={cn(fieldClasses, className)} {...props} />;
  },
);
