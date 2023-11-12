'use client';

import { CommandLoading as Loading } from 'cmdk';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const CommandLoading = ({ className, ...props }, ref) => {
  return (
    <Loading
      className={cn('py-6 text-center text-sm text-muted-content', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(CommandLoading);
