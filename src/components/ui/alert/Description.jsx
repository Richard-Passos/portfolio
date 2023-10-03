'use client';

import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const AlertDescription = ({ asChild, className, ...props }, ref) => {
  const Tag = asChild ? Slot : 'p';

  return (
    <Tag
      className={cn('text-sm', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(AlertDescription);
