'use client';

import { Trigger } from '@radix-ui/react-menubar';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const MenubarTrigger = ({ className, ...props }, ref) => {
  return (
    <Trigger
      className={cn(
        'inline-flex items-center gap-2 rounded-sm px-4 py-1.5 text-sm font-medium transition-colors hover:bg-muted focus-visible:transition-all data-open:bg-muted data-disabled:pointer-events-none data-disabled:opacity-50',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(MenubarTrigger);
