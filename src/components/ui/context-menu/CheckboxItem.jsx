'use client';

import { CheckboxItem } from '@radix-ui/react-context-menu';
import { forwardRef } from 'react';

import { cn } from '@/utils';

import { contextMenuItemVariants } from './Item';

const ContextMenuCheckboxItem = ({ className, ...props }, ref) => {
  return (
    <CheckboxItem
      className={cn(contextMenuItemVariants(), 'relative pl-8', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(ContextMenuCheckboxItem);
