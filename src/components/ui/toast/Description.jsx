'use client';

import { Description } from '@radix-ui/react-toast';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const ToastDescription = ({ className, ...props }, ref) => {
  return (
    <Description
      className={cn('text-sm leading-relaxed', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(ToastDescription);
