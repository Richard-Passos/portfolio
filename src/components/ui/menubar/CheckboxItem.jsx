'use client';

import { CheckboxItem } from '@radix-ui/react-menubar';
import { forwardRef } from 'react';

import { cn } from '@/utils';

import { menubarItemVariants } from './Item';

const MenubarCheckboxItem = ({ className, ...props }, ref) => {
  return (
    <CheckboxItem
      className={cn(menubarItemVariants(), 'relative pl-8', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(MenubarCheckboxItem);
