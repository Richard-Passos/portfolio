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
    solid: 'bg-variant text-variant-content',
    ghost: 'text-variant hover:bg-variant/20',
    outline:
      'border-variant/20 text-variant hover:border-transparent hover:bg-variant/20',
  },
  buttonSizes = {
    sm: 'h-10 px-4 text-sm',
    md: 'h-12 px-6',
    lg: 'h-14 px-8 text-lg',
  };

const buttonVariants = cnv({
  base: 'inline-flex items-center justify-center rounded-full border border-transparent font-medium transition-colors focus-visible:outline-content disabled:pointer-events-none disabled:opacity-50',
  variants: {
    color: variantColors,
    style: buttonStyles,
    size: buttonSizes,
  },
  defaultVariants: {
    color: 'primary',
    style: 'solid',
    size: 'md',
  },
});

export default forwardRef(Button);
export { buttonSizes, buttonStyles, buttonVariants };
