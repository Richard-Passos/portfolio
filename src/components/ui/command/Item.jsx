'use client';

import { CommandItem as Item } from 'cmdk';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const CommandItem = ({ className, ...props }, ref) => {
  return (
    <Item
      className={cn(
        'flex cursor-default select-none items-center gap-2 rounded-sm px-4 py-1.5 text-sm aria-selected:bg-muted data-disabled:pointer-events-none data-disabled:opacity-50',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(CommandItem);
