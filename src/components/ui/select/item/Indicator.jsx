'use client';

import { ItemIndicator } from '@radix-ui/react-select';
import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const SelectItemIndicator = ({ className, children, ...props }, ref) => {
  return (
    <ItemIndicator
      className={cn('absolute left-[.5625rem] h-3.5 w-3.5', className)}
      ref={ref}
      {...props}
    >
      <Slot className='h-full w-full'>{children}</Slot>
    </ItemIndicator>
  );
};

export default forwardRef(SelectItemIndicator);
