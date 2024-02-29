'use client';

import { Root } from '@radix-ui/react-progress';
import { forwardRef } from 'react';

import { ProgressProvider } from '@/contexts';
import { cn, cnv } from '@/utils';

import variantColors from '../variantColors';

const Progress = (
  { value = 0, min = 0, max = 100, variants, className, ...props },
  ref,
) => {
  props = {
    ...props,
    max,
    min,
    ref,
    value,
  };

  return (
    <ProgressProvider value={{ value, min, max }}>
      <Root
        className={cn(progressVariants(variants), className)}
        {...props}
      />
    </ProgressProvider>
  );
};

const progressSizes = {
  xs: 'h-0.5',
  sm: 'h-1',
  md: 'h-2',
  lg: 'h-4',
};

/* 'relative' and 'z-0' are to fix overflow clipping in Safari. See more here: https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0 */
const progressVariants = cnv({
  base: 'relative z-0 w-full overflow-hidden rounded-full bg-variant/20',
  variants: {
    color: variantColors,
    size: progressSizes,
  },
  defaultVariants: {
    color: 'primary',
    size: 'md',
  },
});

export default forwardRef(Progress);
export { progressSizes, progressVariants };
