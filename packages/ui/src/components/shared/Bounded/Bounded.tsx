import clsx from 'clsx';
import React, { ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';

type Padding = 'none' | 'sm' | 'md' | 'lg';

type Size = 'sm' | 'md' | 'full';

type Spacing = 'none' | 'sm' | 'md' | 'lg';

type BoundedProps<T extends React.ElementType> = {
  as?: T;
  children: React.ReactNode;
  className?: string;
  padding?: Padding;
  size?: Size;
  isCentered?: boolean;
  spacing?: Spacing;
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'className'>;

const sizeVariants: Record<Size, string> = {
  sm: 'max-w-4xl',
  md: 'max-w-7xl',
  full: 'max-w-none',
};

const paddingVariants: Record<Padding, string> = {
  none: '',
  sm: 'py-2 px-4 md:px-6 lg:px-8',
  md: 'py-4 px-6 md:px-8 lg:px-10',
  lg: 'py-6 px-8 md:px-10 lg:px-12',
};

const spacingVariants: Record<Spacing, string> = {
  none: '',
  sm: 'space-y-6',
  md: 'space-y-8',
  lg: 'space-y-10',
};

export const Bounded = <T extends React.ElementType>({
  as,
  children,
  className,
  padding = 'sm',
  size = 'md',
  isCentered = true,
  spacing = 'none',
  ...props
}: BoundedProps<T>): React.JSX.Element => {
  const Comp = as ?? 'section';

  return (
    <Comp
      className={twMerge(
        clsx(
          paddingVariants[padding],
          sizeVariants[size],
          spacingVariants[spacing],
          isCentered && 'mx-auto',
          className,
        ),
      )}
      {...props}
    >
      {children}
    </Comp>
  );
};
