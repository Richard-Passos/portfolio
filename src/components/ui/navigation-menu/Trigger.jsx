'use client';

import { Trigger } from '@radix-ui/react-navigation-menu';
import { forwardRef } from 'react';

import { cn, cnv } from '@/utils';

const NavigationMenuTrigger = ({ className, ...props }, ref) => {
  return (
    <Trigger
      className={cn(navigationMenuTriggerVariants(), className)}
      ref={ref}
      {...props}
    />
  );
};

const navigationMenuTriggerVariants = cnv({
  base: 'group inline-flex h-10 items-center justify-center gap-2 rounded-sm px-4 text-sm font-medium transition-colors hover:bg-muted disabled:pointer-events-none disabled:opacity-50 data-open:bg-muted',
});

export default forwardRef(NavigationMenuTrigger);
export { navigationMenuTriggerVariants };
