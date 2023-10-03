'use client';

import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const AlertTitle = ({ asChild, className, ...props }, ref) => {
  const Tag = asChild ? Slot : 'h5';

  return (
    <Tag
      className={cn('mb-1 font-medium leading-none tracking-tight', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(AlertTitle);
