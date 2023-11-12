'use client';

import { SubTrigger } from '@radix-ui/react-menubar';
import { forwardRef } from 'react';

import { cn } from '@/utils';

import { menubarItemVariants } from '../Item';

const MenubarSubTrigger = ({ className, ...props }, ref) => {
  return (
    <SubTrigger
      className={cn(menubarItemVariants(), 'data-open:bg-muted', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(MenubarSubTrigger);
