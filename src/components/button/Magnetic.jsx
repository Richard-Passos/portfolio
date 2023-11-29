import { forwardRef } from 'react';

import { cn, cnv } from '@/utils';

import Magnetic from '../magnetic';
import { Button, Link } from '../ui';

const MagneticButton = (
  { limit = 0.5, children, isLink, variants = {}, className, ...props },
  ref,
) => {
  const content = (
    <Magnetic limit={limit - 0.1}>
      <span className='flex h-full w-full items-center justify-center rounded-inherit'>
        {children}
      </span>
    </Magnetic>
  );

  return (
    <Magnetic
      limit={limit}
      ref={ref}
      {...props}
    >
      <Button
        asChild={isLink}
        className={cn(magneticButtonVariants(variants), className)}
        variants={{ color: variants.color }}
      >
        {isLink ? <Link>{content}</Link> : content}
      </Button>
    </Magnetic>
  );
};

const magneticButtonStyles = {
    basic: 'hover:bg-main focus-visible:outline-current',
    invert: 'hover:border-main hover:bg-content hover:text-main',
  },
  magneticButtonSizes = {
    sm: 'h-10 max-md:text-sm sm:h-12 md:h-14 lg:h-16',
    md: 'h-12 sm:h-14 md:h-16 md:text-lg lg:h-20',
    lg: 'h-36 sm:h-40 md:text-lg md:h-44 lg:text-xl lg:h-52',
  };

const magneticButtonVariants = cnv({
  base: 'aspect-square border-border px-0',
  variants: {
    style: magneticButtonStyles,
    size: magneticButtonSizes,
  },
  defaultVariants: {
    style: 'invert',
    size: 'md',
  },
});

export default forwardRef(MagneticButton);
export { magneticButtonSizes, magneticButtonStyles, magneticButtonVariants };
