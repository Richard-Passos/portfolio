'use client';

import { Root } from '@radix-ui/react-checkbox';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const Checkbox = ({ className, ...props }, ref) => (
  <Root
    className={cn(
      'inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-sm border border-primary text-primary-content disabled:cursor-not-allowed disabled:opacity-50 data-checked:bg-primary',
      className,
    )}
    ref={ref}
    {...props}
  />
);

export default forwardRef(Checkbox);
