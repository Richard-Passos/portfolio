'use client';

import { Thumb } from '@radix-ui/react-switch';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const SwitchThumb = ({ className, ...props }, ref) => {
  return (
    <Thumb
      className={cn(
        'aspect-square w-1/2 rounded-full bg-main transition-transform data-checked:translate-x-full',
      )}
      {...props}
      ref={ref}
    />
  );
};

export default forwardRef(SwitchThumb);
