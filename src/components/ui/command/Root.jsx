'use client';

import { CommandRoot } from 'cmdk';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const Command = ({ className, ...props }, ref) => {
  return (
    <CommandRoot
      className={cn(
        'flex w-full flex-col rounded-md border bg-main',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(Command);
