'use client';

import { RadioItem } from '@radix-ui/react-context-menu';
import { forwardRef } from 'react';

import { cn } from '@/utils';

import { contextMenuItemVariants } from './Item';

const ContextMenuRadioItem = ({ className, ...props }, ref) => {
  return (
    <RadioItem
      className={cn(contextMenuItemVariants(), 'relative pl-8', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(ContextMenuRadioItem);
