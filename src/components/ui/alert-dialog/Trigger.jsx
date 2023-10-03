'use client';

import { Trigger } from '@radix-ui/react-alert-dialog';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const AlertDialogTrigger = ({ className, ...props }, ref) => {
  return (
    <Trigger
      className={cn(className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(AlertDialogTrigger);
