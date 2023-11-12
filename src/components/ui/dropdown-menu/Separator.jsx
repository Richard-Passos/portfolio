'use client';

import { Separator } from '@radix-ui/react-dropdown-menu';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const DropdownMenuSeparator = ({ className, ...props }, ref) => {
  return (
    <Separator
      className={cn('-mx-1 my-1 h-px bg-border', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(DropdownMenuSeparator);
