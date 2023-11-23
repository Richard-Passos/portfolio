import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

import { cn, cnv } from '@/utils';

import variantColors from '../variantColors';

const Button = ({ asChild, variants, className, ...props }, ref) => {
  const Tag = asChild ? Slot : 'button';

  return (
    <Tag
      className={cn(buttonVariants(variants), className)}
      ref={ref}
      {...props}
    />
  );
};

const buttonStyles = {
    basic: 'bg-main text-content',
    invert:
      'bg-main text-content hover:border-main hover:bg-content hover:text-main focus-visible:outline-main',
  },
  buttonSizes = {
    sm: 'h-10 max-md:text-sm sm:h-12 md:h-14 lg:h-16',
    md: 'h-12 sm:h-14 md:h-16 md:text-lg lg:h-20',
    lg: 'h-36 text-lg sm:h-40 md:h-44 md:text-xl lg:h-52',
  };

const buttonVariants = cnv({
  base: 'inline-flex aspect-square items-center justify-center gap-font-blank-space rounded-full border font-medium transition-colors disabled:pointer-events-none disabled:opacity-50',
  variants: {
    color: variantColors,
    style: buttonStyles,
    size: buttonSizes,
  },
  defaultVariants: {
    color: 'primary',
    style: 'invert',
    size: 'md',
  },
});

export default forwardRef(Button);
export { buttonSizes, buttonStyles, buttonVariants };
