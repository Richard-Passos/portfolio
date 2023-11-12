'use client';

import { Root } from '@radix-ui/react-tabs';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const Tabs = ({ className, ...props }, ref) => {
  return (
    <Root
      activationMode='manual'
      className={cn('space-y-2', className)}
      ref={ref}
      {...props}
    />
  );
};
export default forwardRef(Tabs);
