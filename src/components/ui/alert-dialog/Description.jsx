'use client';

import { Description } from '@radix-ui/react-alert-dialog';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const AlertDialogDescription = ({ className, ...props }, ref) => {
  return (
    <Description
      className={cn('text-sm text-muted-content', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(AlertDialogDescription);
