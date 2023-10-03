'use client';

import { forwardRef } from 'react';

import { cn } from '@/utils';

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

const alertVariants = cnva('relative w-full rounded-lg border p-4', {
  variants: {
    variant: {
      default: 'bg-background text-foreground ',
      destructive:
        'border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export default forwardRef(Alert);
