'use client';

import { Trigger } from '@radix-ui/react-navigation-menu';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const NavigationMenuTrigger = ({ className, ...props }, ref) => {
  return (
    <Trigger
      className={cn(
        'group inline-flex h-10 w-max items-center justify-center rounded-md bg-base px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-content focus:bg-accent focus:text-accent-content focus:outline-none disabled:opacity-50 data-open:bg-accent/50',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(NavigationMenuTrigger);
