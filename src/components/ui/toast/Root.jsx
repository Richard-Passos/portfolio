'use client';

import { Root } from '@radix-ui/react-toast';
import { forwardRef } from 'react';

import { cn, cnv } from '@/utils';

import variantColors from '../variantColors';

const Toast = ({ variants, className, ...props }, ref) => {
  return (
    <Root
      className={cn(toastVariants(variants), className)}
      ref={ref}
      {...props}
    />
  );
};

const toastStyles = {
  solid: 'bg-main text-content',
  outline: 'border-main text-main',
};

const toastVariants = cnv({
  base: 'group relative flex max-w-md shrink-0 !touch-pan-y gap-6 overflow-hidden rounded-md border border-transparent p-6 shadow-lg data-closed:animate-out data-closed:fade-out data-closed:slide-out-to-right-full data-open:animate-in data-open:slide-in-from-top-full data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[--radix-toast-swipe-end-x] data-[swipe=move]:translate-x-[--radix-toast-swipe-move-x] data-[swipe=cancel]:transition-transform max-sm:w-full max-sm:flex-col sm:items-center sm:data-open:slide-in-from-bottom-full sm:[&:has([aria-label=Close])]:pr-12',
  variants: {
    color: variantColors,
    style: toastStyles,
  },
  defaultVariants: {
    color: 'main',
    style: 'solid',
  },
});

export default forwardRef(Toast);
export { toastStyles, toastVariants };
