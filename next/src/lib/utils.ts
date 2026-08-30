import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merge class names, de-duping conflicting Tailwind utilities.
 *
 * Note: tailwind-merge is unaware of this project's custom token utilities
 * (`bg-bg`, `text-h1`, `rounded-pill`, `shadow-glow-cyan`, ...). It never breaks
 * them, but it also can't resolve a conflict between two custom-token utilities
 * of the same group — order class strings so the intended winner is last.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
