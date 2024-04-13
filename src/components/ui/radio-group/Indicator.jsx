'use client';

import { Indicator } from '@radix-ui/react-radio-group';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const RadioGroupIndicator = ({ className, ...props }, ref) => {
  return (
    <Indicator
      className={cn('size-2 rounded-inherit *:size-full', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(RadioGroupIndicator);
