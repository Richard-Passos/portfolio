'use client';

import { Content } from '@radix-ui/react-select';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const SelectContent = ({ className, ...props }, ref) => {
  return (
    <Content
      className={cn(
        'relative z-50 max-h-[--radix-select-content-available-height] min-w-[--radix-select-trigger-width] overflow-hidden rounded-sm border bg-main shadow-md data-closed:animate-out data-closed:fade-out data-closed:zoom-out-95 data-open:animate-in data-open:fade-in data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        className,
      )}
      position='popper'
      ref={ref}
      sideOffset={8}
      {...props}
    />
  );
};

export default forwardRef(SelectContent);
