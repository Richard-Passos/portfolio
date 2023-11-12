'use client';

import { RadioItem } from '@radix-ui/react-menubar';
import { forwardRef } from 'react';

import { cn } from '@/utils';

import { menubarItemVariants } from './Item';

const MenubarRadioItem = ({ className, ...props }, ref) => {
  return (
    <RadioItem
      className={cn(menubarItemVariants(), 'relative pl-8', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(MenubarRadioItem);
