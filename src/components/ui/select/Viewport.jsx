'use client';

import { Viewport } from '@radix-ui/react-select';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const SelectViewport = ({ className, ...props }, ref) => {
  return (
    <Viewport
      className={cn('p-1', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(SelectViewport);
