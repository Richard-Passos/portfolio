'use client';

import { Content } from '@radix-ui/react-dropdown-menu';
import { forwardRef } from 'react';

import { cn, cnv } from '@/utils';

const DropdownMenuContent = ({ className, ...props }, ref) => {
  return (
    <Content
      className={cn(dropdownMenuContentVariants(), className)}
      ref={ref}
      sideOffset={8}
      {...props}
    />
  );
};

const dropdownMenuContentVariants = cnv({
  base: 'z-50 max-h-[--radix-dropdown-menu-content-available-height] min-w-[12rem] max-w-[--radix-dropdown-menu-content-available-width] overflow-y-auto overflow-x-hidden rounded-md border bg-main p-1 shadow-md data-closed:animate-out data-closed:fade-out data-closed:zoom-out-95 data-open:animate-in data-open:fade-in data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
});

export default forwardRef(DropdownMenuContent);
export { dropdownMenuContentVariants };
