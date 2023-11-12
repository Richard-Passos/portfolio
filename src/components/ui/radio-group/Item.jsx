'use client';

import { Item } from '@radix-ui/react-radio-group';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const RadioGroupItem = ({ className, ...props }, ref) => {
  return (
    <Item
      className={cn(
        'flex aspect-square w-4 items-center justify-center overflow-hidden rounded-full border border-content disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(RadioGroupItem);
