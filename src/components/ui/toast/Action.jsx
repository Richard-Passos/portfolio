'use client';

import { Action } from '@radix-ui/react-toast';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const ToastAction = ({ className, ...props }, ref) => {
  return (
    <Action
      className={cn('shrink-0 max-sm:w-full', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(ToastAction);
