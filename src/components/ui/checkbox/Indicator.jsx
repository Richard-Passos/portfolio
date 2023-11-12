'use client';

import { Indicator } from '@radix-ui/react-checkbox';
import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const CheckboxIndicator = ({ className, children, ...props }, ref) => {
  return (
    <Indicator
      className={cn('h-3 w-3', className)}
      ref={ref}
      {...props}
    >
      <Slot className='h-full w-full'>{children}</Slot>
    </Indicator>
  );
};

export default forwardRef(CheckboxIndicator);
