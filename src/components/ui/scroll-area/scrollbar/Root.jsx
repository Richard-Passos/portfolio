'use client';

import { Scrollbar } from '@radix-ui/react-scroll-area';
import { forwardRef } from 'react';

import { cn, cnv } from '@/utils';

const ScrollAreaScrollbar = ({ orientation, className, ...props }, ref) => {
  return (
    <Scrollbar
      className={cn(scrollAreaScrollbarVariants({ orientation }), className)}
      orientation={orientation}
      ref={ref}
      {...props}
    />
  );
};

const scrollAreaScrollbarOrientations = {
  vertical: 'h-full w-2.5',
  horizontal: 'h-2.5 flex-col',
};

const scrollAreaScrollbarVariants = cnv({
  base: 'flex touch-none select-none bg-muted p-0.5',
  variants: {
    orientation: scrollAreaScrollbarOrientations,
  },
  defaultVariants: {
    orientation: 'vertical',
  },
});

export default forwardRef(ScrollAreaScrollbar);
export { scrollAreaScrollbarOrientations, scrollAreaScrollbarVariants };
