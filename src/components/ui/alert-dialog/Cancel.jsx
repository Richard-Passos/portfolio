'use client';

import { Cancel } from '@radix-ui/react-alert-dialog';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const AlertDialogCancel = ({ className, ...props }, ref) => {
  return (
    <Cancel
      className={cn('max-sm:w-full', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(AlertDialogCancel);
