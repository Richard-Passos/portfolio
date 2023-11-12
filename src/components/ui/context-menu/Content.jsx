'use client';

import { Content } from '@radix-ui/react-context-menu';
import { forwardRef } from 'react';

import { cn, cnv } from '@/utils';

const ContextMenuContent = ({ className, ...props }, ref) => {
  return (
    <Content
      className={cn(contextMenuContentVariants(), className)}
      ref={ref}
      {...props}
    />
  );
};

const contextMenuContentVariants = cnv({
  base: 'z-50 max-h-[--radix-context-menu-content-available-height] min-w-[12rem] max-w-[--radix-context-menu-content-available-width] overflow-y-auto overflow-x-hidden rounded-md border bg-main p-1 shadow-md data-closed:animate-out data-closed:fade-out data-closed:zoom-out-95 data-open:animate-in data-open:fade-in data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
});

export default forwardRef(ContextMenuContent);
export { contextMenuContentVariants };
