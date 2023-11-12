'use client';

import { ScrollUpButton } from '@radix-ui/react-select';
import { forwardRef } from 'react';

import { cn } from '@/utils';

import selectScrollButtonVariants from './variants';

const SelectScrollUpButton = ({ className, ...props }, ref) => {
  return (
    <ScrollUpButton
      className={cn(selectScrollButtonVariants({ side: 'up' }), className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(SelectScrollUpButton);
