'use client';

import { Content } from '@radix-ui/react-dialog';
import { forwardRef } from 'react';

import { cn, cnv } from '@/utils';

const SheetContent = ({ variants, className, ...props }, ref) => {
  return (
    <Content
      className={cn(sheetContentVariants(variants), className)}
      ref={ref}
      {...props}
    />
  );
};

const sheetContentSides = {
  top: 'inset-x-0 top-0 border-b data-closed:slide-out-to-top data-open:slide-in-from-top',
  bottom:
    'inset-x-0 bottom-0 border-t data-closed:slide-out-to-bottom data-open:slide-in-from-bottom',
  left: 'inset-y-0 left-0 w-4/5 max-w-sm border-r data-closed:slide-out-to-left data-open:slide-in-from-left',
  right:
    'inset-y-0 right-0 w-4/5 max-w-sm border-l data-closed:slide-out-to-right data-open:slide-in-from-right',
};

const sheetContentVariants = cnv({
  base: 'fixed z-50 max-h-screen space-y-6 overflow-y-auto bg-main p-6 shadow-lg ease-in-out data-closed:duration-300 data-closed:animate-out data-open:duration-500 data-open:animate-in',
  variants: {
    side: sheetContentSides,
  },
  defaultVariants: {
    side: 'right',
  },
});

export default forwardRef(SheetContent);
export { sheetContentSides, sheetContentVariants };
