'use client';

import { Viewport } from '@radix-ui/react-toast';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const ToastViewport = ({ className, ...props }, ref) => {
  return (
    <Viewport
      className={cn(
        'hide-scrollbar fixed z-[100] flex max-h-screen flex-col-reverse items-center gap-5 overflow-y-auto overflow-x-hidden p-5 outline-none max-sm:left-0 max-sm:top-0 max-sm:w-full sm:bottom-0 sm:right-0 sm:flex-col sm:items-end',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(ToastViewport);
