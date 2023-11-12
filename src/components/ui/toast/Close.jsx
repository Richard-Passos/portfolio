'use client';

import { Close } from '@radix-ui/react-toast';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const ToastClose = ({ className, ...props }, ref) => {
  return (
    <Close
      aria-label='Close'
      className={cn(
        'absolute right-4 top-4 flex h-6 w-6 items-center justify-center rounded-sm transition-all hover:bg-content/20 disabled:pointer-events-none disabled:opacity-50 group-focus-within:opacity-100 group-hover:opacity-100 sm:opacity-0 [&>svg]:h-4 [&>svg]:w-4',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(ToastClose);
