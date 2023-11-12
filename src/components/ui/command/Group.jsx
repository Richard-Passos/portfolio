'use client';

import { CommandGroup as Group } from 'cmdk';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const CommandGroup = ({ className, ...props }, ref) => {
  return (
    <Group
      className={cn(
        'p-1 [&_[cmdk-group-heading]]:px-4 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-content',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(CommandGroup);
