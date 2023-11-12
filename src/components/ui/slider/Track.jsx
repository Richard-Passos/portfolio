'use client';

import { Track } from '@radix-ui/react-slider';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const SliderTrack = ({ className, ...props }, ref) => {
  return (
    <Track
      className={cn(
        'relative grow rounded-full bg-muted-content/25 data-[orientation=horizontal]:h-1 data-[orientation=vertical]:w-1',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(SliderTrack);
