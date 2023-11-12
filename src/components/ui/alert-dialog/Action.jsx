'use client';

import { Action } from '@radix-ui/react-alert-dialog';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const AlertDialogAction = ({ className, ...props }, ref) => {
  return (
    <Action
      className={cn('max-sm:w-full', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(AlertDialogAction);
