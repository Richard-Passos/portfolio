'use client';

import { Indicator } from '@radix-ui/react-radio-group';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const RadioGroupIndicator = ({ className, ...props }, ref) => {
  return (
    <Indicator
      className={cn('rounded-inherit size-2 *:size-full', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(RadioGroupIndicator);
