'use client';

import { Close } from '@radix-ui/react-dialog';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const SheetClose = ({ className, ...props }, ref) => {
  return (
    <Close
      aria-label='Close'
      className={cn(
        'absolute right-4 top-4 flex h-6 w-6 items-center justify-center rounded-sm transition-colors hover:bg-content/20 disabled:pointer-events-none disabled:opacity-50 [&>svg]:h-4 [&>svg]:w-4',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(SheetClose);
