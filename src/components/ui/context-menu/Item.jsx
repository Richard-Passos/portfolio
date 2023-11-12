'use client';

import { Item } from '@radix-ui/react-context-menu';
import { forwardRef } from 'react';

import { cn, cnv } from '@/utils';

const ContextMenuItem = ({ className, ...props }, ref) => {
  return (
    <Item
      className={cn(contextMenuItemVariants(), className)}
      ref={ref}
      {...props}
    />
  );
};

const contextMenuItemVariants = cnv({
  base: 'flex cursor-default select-none items-center gap-2 rounded-sm px-4 py-1.5 text-sm outline-none focus:bg-muted data-disabled:pointer-events-none data-disabled:opacity-50',
});

export default forwardRef(ContextMenuItem);
export { contextMenuItemVariants };
