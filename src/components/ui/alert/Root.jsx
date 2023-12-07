import { forwardRef } from 'react';

import { cn, cnv } from '@/utils';

import variantColors from '../variantColors';

const Alert = ({ variants, className, ...props }, ref) => {
  return (
    <section
      className={cn(alertVariants(variants), className)}
      ref={ref}
      role='alert'
      {...props}
    />
  );
};

const alertStyles = {
  solid: 'bg-variant text-variant-content',
  outline: 'border-variant text-variant',
};

const alertVariants = cnv({
  base: 'relative w-full max-w-md rounded-md border border-transparent p-5',
  variants: {
    color: variantColors,
    style: alertStyles,
  },
  defaultVariants: {
    color: 'main',
    style: 'solid',
  },
});

export default forwardRef(Alert);
export { alertStyles, alertVariants };
