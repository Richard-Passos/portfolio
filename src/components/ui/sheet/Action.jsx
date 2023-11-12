'use client';

import { Close } from '@radix-ui/react-dialog';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const SheetAction = ({ className, ...props }, ref) => {
  return (
    <Close
      className={cn('max-sm:w-full', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(SheetAction);
