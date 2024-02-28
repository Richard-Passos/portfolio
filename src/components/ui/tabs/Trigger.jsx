'use client';

import { Trigger } from '@radix-ui/react-tabs';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const TabsTrigger = ({ className, ...props }, ref) => {
  return (
    <Trigger
      className={cn(
        'data-active:bg-main data-active:text-content data-active:shadow-sm inline-flex w-full items-center justify-center rounded-sm px-4 py-1.5 text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(TabsTrigger);
