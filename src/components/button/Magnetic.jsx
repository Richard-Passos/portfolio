import { forwardRef } from 'react';

import { cn, cnv } from '@/utils';

import Magnetic from '../magnetic';
import Button from './Root';

const MagneticButton = (
  { limit = 0.5, asLink, variants = {}, className, children, ...props },
  ref,
) => {
  return (
    <Magnetic
      limit={limit}
      ref={ref}
      {...props}
    >
      <Button
        asLink={asLink}
        className={cn(magneticButtonVariants(variants), className)}
        variants={{ color: variants.color }}
      >
        <Magnetic
          className='flex size-full items-center justify-center rounded-inherit'
          limit={limit * 0.8}
        >
          <span>{children}</span>
        </Magnetic>
      </Button>
    </Magnetic>
  );
};

const magneticButtonSizes = {
  sm: 'h-10 max-md:text-sm sm:h-12 md:h-14 lg:h-16',
  md: 'h-12 sm:h-14 md:h-16 md:text-lg lg:h-20',
  lg: 'h-24 text-lg sm:h-28 md:h-32 lg:h-40',
};

const magneticButtonVariants = cnv({
  base: 'aspect-square px-0 [clip-path:circle(100%)] [&_svg]:size-1/3',
  variants: {
    size: magneticButtonSizes,
  },
  defaultVariants: {
    size: 'md',
  },
});

export default forwardRef(MagneticButton);
export { magneticButtonSizes, magneticButtonVariants };
