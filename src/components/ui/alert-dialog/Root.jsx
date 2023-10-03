'use client';

import { Root } from '@radix-ui/react-alert-dialog';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const AlertDialog = ({ className, ...props }, ref) => {
  return (
    <Root
      className={cn(className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(AlertDialog);
