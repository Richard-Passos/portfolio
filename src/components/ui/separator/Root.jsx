'use client';

import { Root } from '@radix-ui/react-separator';
import { forwardRef } from 'react';

import { cn, cnv } from '@/utils';

const Separator = ({ className, orientation, ...props }, ref) => {
  return (
    <Root
      className={cn(separatorVariants({ orientation }), className)}
      decorative
      orientation={orientation}
      ref={ref}
      {...props}
    />
  );
};

const separatorOrientations = {
  horizontal: 'h-px w-full',
  vertical: 'h-full w-px',
};

const separatorVariants = cnv({
  base: 'shrink-0 bg-border',
  variants: {
    orientation: separatorOrientations,
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
});

export default forwardRef(Separator);
export { separatorOrientations, separatorVariants };
