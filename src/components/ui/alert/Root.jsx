'use client';

import { forwardRef } from 'react';

import { cn, cnv } from '@/utils';

const Alert = ({ className, variant, ...props }, ref) => {
  return (
    <section
      className={cn(alertVariants({ variant }), className)}
      ref={ref}
      role='alert'
      {...props}
    />
  );
};

const alertVariants = cnv({
  base: 'relative w-full rounded-lg border p-4',
  variants: {
    variant: {
      default: 'bg-main text-content ',
      destructive:
        'border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export default forwardRef(Alert);
