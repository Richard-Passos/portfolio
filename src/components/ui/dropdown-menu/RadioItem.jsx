'use client';

import { RadioItem } from '@radix-ui/react-dropdown-menu';
import { forwardRef } from 'react';

import { cn } from '@/utils';

import { dropdownMenuItemVariants } from './Item';

const DropdownMenuRadioItem = ({ className, ...props }, ref) => {
  return (
    <RadioItem
      className={cn(dropdownMenuItemVariants(), 'relative pl-8', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(DropdownMenuRadioItem);
