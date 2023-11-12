'use client';

import { Root } from '@radix-ui/react-radio-group';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const RadioGroup = ({ className, ...props }, ref) => {
  return (
    <Root
      className={cn('space-y-2', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(RadioGroup);
