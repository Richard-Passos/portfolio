'use client';

import { Trigger } from '@radix-ui/react-select';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const SelectTrigger = ({ className, ...props }, ref) => {
  return (
    <Trigger
      className={cn(
        'group flex h-10 w-full items-center justify-between rounded-sm border bg-main px-4 text-sm focus:outline disabled:cursor-not-allowed disabled:opacity-50 data-open:outline [&>:not(svg)]:data-[placeholder]:text-muted-content',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(SelectTrigger);
