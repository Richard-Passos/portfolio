'use client';

import { SubTrigger } from '@radix-ui/react-context-menu';
import { forwardRef } from 'react';

import { cn } from '@/utils';

import { contextMenuItemVariants } from '../Item';

const ContextMenuSubTrigger = ({ className, ...props }, ref) => {
  return (
    <SubTrigger
      className={cn(contextMenuItemVariants(), 'data-open:bg-muted', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(ContextMenuSubTrigger);
