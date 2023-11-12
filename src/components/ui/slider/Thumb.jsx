'use client';

import { Thumb } from '@radix-ui/react-slider';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const SliderThumb = ({ className, ...props }, ref) => {
  return (
    <Thumb
      className={cn(
        'block aspect-square w-5 cursor-grab rounded-full bg-inverted active:cursor-grabbing data-disabled:cursor-not-allowed',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(SliderThumb);
