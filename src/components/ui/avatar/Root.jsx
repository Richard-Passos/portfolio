'use client';

import { Root } from '@radix-ui/react-avatar';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const Avatar = ({ className, ...props }, ref) => {
  return (
    <Root
      className={cn('h-10 w-10 shrink-0 rounded-full', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(Avatar);
