import { forwardRef } from 'react';

import { cn, cnv } from '@/utils';

import Magnetic from '../magnetic';
import Button from './Root';

const MagneticButton = (
  { limit = 0.5, href, variants = {}, className, children, ...props },
  ref,
) => {
  return (
    <Magnetic
      limit={limit}
      ref={ref}
      {...props}
    >
      <Button
        href={href}
        className={cn(magneticButtonVariants(variants), className)}
        variants={variants}
      >
        <Magnetic
          className='flex size-full items-center justify-center gap-[inherit] rounded-inherit'
          limit={limit * 0.8}
        >
          <span>{children}</span>
        </Magnetic>
      </Button>
    </Magnetic>
  );
};

const magneticButtonSizes = {
  sm: 'h-[clamp(theme(spacing.12),5vw,theme(spacing.16))] max-md:text-sm',
  md: 'h-[clamp(theme(spacing.16),6vw,theme(spacing.20))]',
  lg: 'h-[clamp(theme(spacing.20),12vw,theme(spacing.60))] text-lg',
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
