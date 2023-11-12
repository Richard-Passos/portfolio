'use client';

import { Overlay } from '@radix-ui/react-dialog';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const DialogOverlay = ({ className, ...props }, ref) => {
  return (
    <Overlay
      className={cn(
        'fixed inset-0 z-50 bg-main/80 backdrop-blur-sm data-closed:animate-out data-closed:fade-out data-open:animate-in data-open:fade-in',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(DialogOverlay);
