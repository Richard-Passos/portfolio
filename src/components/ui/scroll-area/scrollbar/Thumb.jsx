'use client';

import { Thumb } from '@radix-ui/react-scroll-area';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const ScrollAreaScrollbarThumb = ({ className, ...props }, ref) => {
  return (
    <Thumb
      className={cn(
        'flex-1 rounded-full bg-muted-content/25 transition-colors hover:bg-muted-content/50',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(ScrollAreaScrollbarThumb);
