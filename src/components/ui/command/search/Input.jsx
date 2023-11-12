'use client';

import { CommandInput } from 'cmdk';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const CommandSearchInput = ({ className, ...props }, ref) => {
  return (
    <CommandInput
      className={cn(
        'h-10 w-full bg-transparent pl-11 text-sm outline-none placeholder:text-muted-content disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(CommandSearchInput);
