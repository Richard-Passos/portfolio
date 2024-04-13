'use client';

import { ItemIndicator } from '@radix-ui/react-context-menu';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const ContextMenuItemIndicator = ({ className, ...props }, ref) => {
  return (
    <ItemIndicator
      className={cn('absolute left-[.5625rem] size-3.5 *:size-full', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(ContextMenuItemIndicator);
