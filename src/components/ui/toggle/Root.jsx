'use client';

import { Root } from '@radix-ui/react-toggle';
import { forwardRef } from 'react';

import { cn, cnv } from '@/utils';

const Toggle = ({ variants, className, ...props }, ref) => {
  return (
    <Root
      className={cn(toggleVariants(variants), className)}
      ref={ref}
      {...props}
    />
  );
};

const toggleStyles = {
    solid:
      'bg-inverted/80 text-inverted-content hover:bg-inverted/90 data-[state=on]:bg-inverted',
    ghost: 'text-inverted hover:bg-inverted/10 data-[state=on]:bg-inverted/20',
    outline:
      'text-inverted border-inverted/10 hover:border-transparent hover:bg-inverted/10 data-[state=on]:border-transparent data-[state=on]:bg-inverted/20',
  },
  toggleSizes = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-12',
  };

const toggleVariants = cnv({
  base: 'inline-flex aspect-square items-center justify-center rounded-sm border border-transparent text-sm font-medium transition-all active:scale-[.98] disabled:pointer-events-none disabled:opacity-50',
  variants: {
    style: toggleStyles,
    size: toggleSizes,
  },
  defaultVariants: {
    style: 'solid',
    size: 'md',
  },
});

export default forwardRef(Toggle);
export { toggleSizes, toggleStyles, toggleVariants };
