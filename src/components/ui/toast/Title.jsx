'use client';

import { Title } from '@radix-ui/react-toast';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const ToastTitle = ({ className, ...props }, ref) => {
  return (
    <Title
      className={cn('font-semibold leading-none', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(ToastTitle);
