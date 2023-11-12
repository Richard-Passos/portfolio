'use client';

import { Item } from '@radix-ui/react-dropdown-menu';
import { forwardRef } from 'react';

import { cn, cnv } from '@/utils';

const DropdownMenuItem = ({ className, ...props }, ref) => {
  return (
    <Item
      className={cn(dropdownMenuItemVariants(), className)}
      ref={ref}
      {...props}
    />
  );
};

const dropdownMenuItemVariants = cnv({
  base: 'flex cursor-default select-none items-center gap-2 rounded-sm px-4 py-1.5 text-sm outline-none focus:bg-muted data-disabled:pointer-events-none data-disabled:opacity-50',
});

export default forwardRef(DropdownMenuItem);
export { dropdownMenuItemVariants };
