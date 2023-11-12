'use client';

import { SubContent } from '@radix-ui/react-context-menu';
import { forwardRef } from 'react';

import { cn } from '@/utils';

import { contextMenuContentVariants } from '../Content';

const ContextMenuSubContent = ({ className, ...props }, ref) => {
  return (
    <SubContent
      className={cn(
        contextMenuContentVariants(),
        'min-w-[8rem] shadow-lg',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(ContextMenuSubContent);
