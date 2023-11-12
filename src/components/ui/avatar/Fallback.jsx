'use client';

import { Fallback } from '@radix-ui/react-avatar';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const AvatarFallback = ({ className, ...props }, ref) => {
  return (
    <Fallback
      className={cn(
        'flex h-full w-full items-center justify-center rounded-inherit bg-muted',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(AvatarFallback);
