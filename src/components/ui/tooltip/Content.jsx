'use client';

import { Content } from '@radix-ui/react-tooltip';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const TooltipContent = ({ className, ...props }, ref) => {
  return (
    <Content
      className={cn(
        'z-50 overflow-hidden rounded-sm border bg-main px-4 py-1.5 text-sm shadow-md animate-in fade-in zoom-in-95 data-closed:animate-out data-closed:fade-out data-closed:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        className,
      )}
      ref={ref}
      sideOffset={8}
      {...props}
    />
  );
};

export default forwardRef(TooltipContent);
