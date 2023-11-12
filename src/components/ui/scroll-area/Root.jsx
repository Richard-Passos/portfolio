'use client';

import { Root } from '@radix-ui/react-scroll-area';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const ScrollArea = ({ className, ...props }, ref) => {
  return (
    <Root
      className={cn('relative overflow-hidden', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(ScrollArea);
