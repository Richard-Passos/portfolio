'use client';

import { Icon } from '@radix-ui/react-select';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const SelectIcon = ({ className, ...props }, ref) => {
  return (
    <Icon
      className={cn('h-3.5 w-3.5', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(SelectIcon);
