'use client';

import { cn, cnv } from '@/utils';

import variantColors from '../../variantColors';

const CarouselProgress = ({ variants, className, ...props }) => {
  return (
    <div
      className={cn(carouselProgressVariants(variants), className)}
      {...props}
    />
  );
};

const carouselProgressSizes = {
  sm: 'h-0.5',
  md: 'h-1',
  lg: 'h-2',
};

/* 'relative' and 'z-0' are to fix overflow clipping in Safari. See more here: https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0 */
const carouselProgressVariants = cnv({
  base: 'relative z-0 w-full overflow-hidden rounded-full bg-variant/20',
  variants: {
    color: variantColors,
    size: carouselProgressSizes,
  },
  defaultVariants: {
    color: 'primary',
    size: 'md',
  },
});

export default CarouselProgress;
export { carouselProgressSizes, carouselProgressVariants };
