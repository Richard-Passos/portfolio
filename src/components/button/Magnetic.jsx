import { forwardRef } from 'react';

import { cn, cnv } from '@/utils';

import Magnetic from '../magnetic';
import { Button, Link } from '../ui';

const MagneticButton = (
  { limit = 0.5, children, isLink, variants = {}, className, ...props },
  ref,
) => {
  const content = (
    <>
      <Magnetic
        className='relative z-10 flex h-full w-full items-center justify-center rounded-inherit'
        limit={limit * 0.8}
      >
        <span>{children}</span>
      </Magnetic>

      <div className='absolute inset-0 translate-y-[101%] rounded-[50%_50%_0_0] transition-[transform,border-radius] duration-500 group-hover:translate-y-0 group-hover:rounded-[0%_0%_0_0]'>
        <span className='absolute inset-0 rounded-inherit bg-variant-active transition-bg' />
      </div>
    </>
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

const magneticButtonSizes = {
  sm: 'h-10 max-md:text-sm sm:h-12 md:h-14 lg:h-16',
  md: 'h-12 sm:h-14 md:h-16 md:text-lg lg:h-20',
  lg: 'h-24 text-lg sm:h-28 md:h-32 lg:h-40',
};

const magneticButtonVariants = cnv({
  base: 'group relative aspect-square overflow-hidden border-border px-0 [clip-path:circle(100%)] hover:bg-variant [&_svg]:h-1/3 [&_svg]:w-1/3',
  variants: {
    size: magneticButtonSizes,
  },
  defaultVariants: {
    size: 'md',
  },
});

export default forwardRef(MagneticButton);
export { magneticButtonSizes, magneticButtonVariants };
