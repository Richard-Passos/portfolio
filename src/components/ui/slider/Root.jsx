'use client';

import { Root } from '@radix-ui/react-slider';
import { forwardRef } from 'react';

import { cn, cnv } from '@/utils';

const Slider = ({ orientation, className, ...props }, ref) => {
  return (
    <Root
      className={cn(sliderVariants({ orientation }), className)}
      orientation={orientation}
      ref={ref}
      {...props}
    />
  );
};

const sliderOrientations = {
  horizontal: 'h-5 w-full',
  vertical: 'h-full w-5 flex-col',
};

const sliderVariants = cnv({
  base: 'relative flex touch-none select-none items-center data-disabled:cursor-not-allowed data-disabled:opacity-50',
  variants: {
    orientation: sliderOrientations,
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
});

export default forwardRef(Slider);
export { sliderOrientations, sliderVariants };
