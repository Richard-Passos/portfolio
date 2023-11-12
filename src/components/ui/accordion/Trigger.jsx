'use client';

import { Trigger } from '@radix-ui/react-accordion';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const AccordionTrigger = ({ className, ...props }, ref) => {
  return (
    <Trigger
      className={cn(
        'group flex h-12 w-full cursor-pointer items-center justify-between px-6 font-medium outline-none transition-colors hover:bg-muted/50',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(AccordionTrigger);
