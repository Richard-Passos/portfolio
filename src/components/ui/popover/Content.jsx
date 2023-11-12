'use client';

import { Content } from '@radix-ui/react-popover';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const PopoverContent = ({ className, ...props }, ref) => {
  return (
    <Content
      align='center'
      className={cn(
        'relative z-50 max-h-[--radix-popover-content-available-height] w-80 max-w-[--radix-popover-content-available-width] overflow-y-auto rounded-md border bg-main p-5 shadow-md data-closed:animate-out data-closed:fade-out data-closed:zoom-out-95 data-open:animate-in data-open:fade-in data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        className,
      )}
      ref={ref}
      sideOffset={8}
      {...props}
    />
  );
};

export default forwardRef(PopoverContent);
