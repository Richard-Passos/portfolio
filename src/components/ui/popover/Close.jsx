'use client';

import { Close } from '@radix-ui/react-popover';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const PopoverClose = ({ className, ...props }, ref) => {
  return (
    <Close
      aria-label='Close'
      className={cn(
        'absolute right-3 top-3 flex h-6 w-6 items-center justify-center rounded-sm transition-colors hover:bg-content/20 disabled:pointer-events-none disabled:opacity-50 [&>svg]:h-4 [&>svg]:w-4',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(PopoverClose);
