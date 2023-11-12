'use client';

import { CommandSeparator as Separator } from 'cmdk';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const CommandSeparator = ({ className, ...props }, ref) => {
  return (
    <Separator
      className={cn('-mx-1 h-px bg-border', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(CommandSeparator);
