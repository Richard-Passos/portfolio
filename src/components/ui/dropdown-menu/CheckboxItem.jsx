'use client';

import { CheckboxItem } from '@radix-ui/react-dropdown-menu';
import { forwardRef } from 'react';

import { cn } from '@/utils';

import { dropdownMenuItemVariants } from './Item';

const DropdownMenuCheckboxItem = ({ className, ...props }, ref) => {
  return (
    <CheckboxItem
      className={cn(dropdownMenuItemVariants(), 'relative pl-8', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(DropdownMenuCheckboxItem);
