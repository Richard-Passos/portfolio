'use client';

import { Content } from '@radix-ui/react-dialog';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const DialogContent = ({ className, ...props }, ref) => {
  return (
    <Content
      className={cn(
        'fixed left-1/2 top-1/2 z-50 max-h-screen w-full max-w-md -translate-x-1/2 -translate-y-1/2 space-y-6 overflow-y-auto overflow-x-hidden border bg-main p-6 shadow-lg data-closed:animate-out data-closed:fade-out data-closed:zoom-out-95 data-closed:slide-out-to-left-1/2 data-closed:slide-out-to-top-[48%] data-open:animate-in data-open:fade-in data-open:zoom-in-95 data-open:slide-in-from-left-1/2 data-open:slide-in-from-top-[48%] sm:rounded-md',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(DialogContent);
