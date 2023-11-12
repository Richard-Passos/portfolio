'use client';

import { Indicator } from '@radix-ui/react-radio-group';
import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const RadioGroupIndicator = ({ className, children, ...props }, ref) => {
  return (
    <Indicator
      className={cn('h-2 w-2 rounded-inherit', className)}
      ref={ref}
      {...props}
    >
      <Slot className='h-full w-full'>{children}</Slot>
    </Indicator>
  );
};

export default forwardRef(RadioGroupIndicator);
