'use client';

import { Range } from '@radix-ui/react-slider';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const SliderRange = ({ className, ...props }, ref) => {
  return (
    <Range
      className={cn(
        'absolute rounded-inherit bg-inverted data-[orientation=horizontal]:h-full data-[orientation=horizontal]:w-auto data-[orientation=vertical]:w-full',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(SliderRange);
