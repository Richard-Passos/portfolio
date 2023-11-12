'use client';

import { SubTrigger } from '@radix-ui/react-dropdown-menu';
import { forwardRef } from 'react';

import { cn } from '@/utils';

import { dropdownMenuItemVariants } from '../Item';

const DropdownMenuSubTrigger = ({ className, ...props }, ref) => {
  return (
    <SubTrigger
      className={cn(
        dropdownMenuItemVariants(),
        'data-open:bg-muted',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(DropdownMenuSubTrigger);
