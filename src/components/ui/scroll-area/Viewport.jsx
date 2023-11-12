'use client';

import { Viewport } from '@radix-ui/react-scroll-area';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const ScrollAreaViewport = ({ className, ...props }, ref) => {
  return (
    <Viewport
      className={cn('h-full w-full', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(ScrollAreaViewport);
