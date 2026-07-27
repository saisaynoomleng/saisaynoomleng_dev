import clsx from 'clsx';
import React, { ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';

type Headings = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type Size = 'sm' | 'md' | 'lg';

type SectionTitleProps<T extends Headings> = {
  as?: T;
  className?: string;
  label: string;
  size?: Size;
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'className'>;

const sizeVariants: Record<Size, string> = {
  sm: 'text-fs-500 md:text-fs-600 lg:text-fs-700',
  md: 'text-fs-600 md:text-fs-700 lg:text-fs-800',
  lg: 'text-fs-700 md:text-fs-800 lg:text-fs-900',
};

export const SectionTitle = <T extends Headings>({
  as,
  className,
  size = 'sm',
  label,
}: SectionTitleProps<T>): React.JSX.Element => {
  const Comp = as ?? 'h3';
  return (
    <Comp
      className={twMerge(
        clsx('font-semibold capitalize', sizeVariants[size], className),
      )}
    >
      {label}
    </Comp>
  );
};
