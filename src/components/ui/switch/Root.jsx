'use client';

import { Root } from '@radix-ui/react-switch';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const Switch = ({ className, ...props }, ref) => {
  return (
    <Root
      className={cn(
        'peer inline-flex w-10 shrink-0 cursor-pointer rounded-full bg-muted-content/25 p-0.5 transition-colors disabled:cursor-not-allowed disabled:opacity-50 data-checked:bg-inverted',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(Switch);
