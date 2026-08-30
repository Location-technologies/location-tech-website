import { cloneElement, useId } from 'react';

import { cn } from '@/lib/utils';

type FieldControlProps = {
  id?: string;
  'aria-invalid'?: boolean;
  'aria-describedby'?: string;
};

type FieldProps = {
  label: string;
  error?: string;
  hint?: string;
  className?: string;
  /** A single form control — receives `id` / `aria-*` wiring automatically. */
  children: React.ReactElement<FieldControlProps>;
};

/** Label + control + optional hint / error, with the a11y wiring done. */
export function Field({ label, error, hint, className, children }: FieldProps) {
  const id = useId();
  const errorId = `${id}-error`;
  const hintId = `${id}-hint`;
  const describedBy = [error ? errorId : null, hint ? hintId : null].filter(Boolean).join(' ');

  const control = cloneElement(children, {
    id,
    'aria-invalid': error ? true : undefined,
    'aria-describedby': describedBy || undefined,
  });

  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <label
        htmlFor={id}
        className="font-mono text-2xs font-semibold uppercase tracking-[0.14em] text-text-muted"
      >
        {label}
      </label>
      {control}
      {hint && !error ? (
        <p id={hintId} className="text-sm text-text-muted">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={errorId} className="text-sm text-warn">
          {error}
        </p>
      ) : null}
    </div>
  );
}
