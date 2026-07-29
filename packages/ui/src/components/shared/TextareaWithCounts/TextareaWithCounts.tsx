'use client';

import React, { ComponentPropsWithoutRef, useState } from 'react';
import { Bounded } from '../Bounded';
import { Textarea } from '#components/ui/textarea';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';

type TextareaWithCountProps = {
  maxLength?: number;
  className?: string;
  id: string;
} & Omit<ComponentPropsWithoutRef<'textarea'>, 'maxLength' | 'id'>;

export const TextareaWithCount = ({
  maxLength = 2000,
  className,
  id,
  onChange,
  ...props
}: TextareaWithCountProps): React.JSX.Element => {
  const [count, setCount] = useState<number>(0);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCount(e.target.value.length);
    onChange?.(e);
  };

  const isReachLimit = count === maxLength;

  return (
    <Bounded className={twMerge(clsx('flex flex-col gap-y-1', className))}>
      <Textarea
        id={id}
        maxLength={maxLength}
        onChange={handleTextChange}
        {...props}
      />

      <div className="flex justify-between">
        <p className="self-end">
          {count} / {maxLength}
        </p>

        {isReachLimit && (
          <p className="text-brand-warning-400">Maximum Character Reached</p>
        )}
      </div>
    </Bounded>
  );
};
