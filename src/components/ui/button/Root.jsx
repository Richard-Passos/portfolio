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
    solid: 'bg-main text-content hover:bg-main/80',
    ghost: 'text-main hover:bg-main/20',
    outline:
      'border-main/20 text-main hover:border-transparent hover:bg-main/20',
  },
  buttonSizes = {
    sm: 'h-10 px-4 text-sm',
    md: 'h-12 px-6',
    lg: 'h-14 px-8 text-lg',
  };

const buttonVariants = cnv({
  base: 'inline-flex items-center justify-center gap-font-blank-space rounded-full border border-transparent font-medium transition-colors focus-visible:outline-main disabled:pointer-events-none disabled:opacity-50',
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
