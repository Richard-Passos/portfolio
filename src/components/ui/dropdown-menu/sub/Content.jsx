'use client';

import { SubContent } from '@radix-ui/react-dropdown-menu';
import { forwardRef } from 'react';

import { cn } from '@/utils';

import { dropdownMenuContentVariants } from '../Content';

const DropdownMenuSubContent = ({ className, ...props }, ref) => {
  return (
    <SubContent
      className={cn(
        dropdownMenuContentVariants(),
        'min-w-[8rem] shadow-lg',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(DropdownMenuSubContent);
