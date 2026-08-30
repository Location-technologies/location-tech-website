import { cn } from '@/lib/utils';

type ContainerProps<T extends React.ElementType> = {
  as?: T;
  className?: string;
  children?: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'className' | 'children'>;

/** Page-width wrapper — matches the Nuxt site's `max-w-[1240px]` gutter. */
export function Container<T extends React.ElementType = 'div'>({
  as,
  className,
  children,
  ...props
}: ContainerProps<T>) {
  const Comp = as ?? 'div';
  return (
    <Comp
      className={cn('mx-auto w-full max-w-[1240px] px-4 min-[400px]:px-5 sm:px-8', className)}
      {...props}
    >
      {children}
    </Comp>
  );
}
