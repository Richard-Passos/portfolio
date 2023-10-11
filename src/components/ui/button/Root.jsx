'use client';

import { Slot } from '@radix-ui/react-slot';
import { motion } from 'framer-motion';
import { forwardRef } from 'react';

import { cn, cnv } from '@/utils';

const MotionChild = motion(Slot);

const Button = ({ asChild, variants, className, ...props }, ref) => {
  const Tag = asChild ? MotionChild : motion.button;

  return (
    <Tag
      className={cn(buttonVariants(variants), className)}
      ref={ref}
      whileTap={{ '--tw-scale-x': 0.95, '--tw-scale-y': 0.95 }}
      {...props}
    />
  );
};

const buttonVariants = cnv({
  base: 'inline-flex transform items-center justify-center rounded-md border border-transparent font-medium transition-colors',
  variants: {
    color: {
      primary: '[--base:--primary] [--content:--primary-c]',
      secondary: '[--base:--secondary] [--content:--secondary-c]',
      danger: '[--base:--danger] [--content:--danger-c]',
      base: '[--base:--base] [--content:--content]',
    },
    variant: {
      default: 'bg-base text-content hover:bg-base/80',
      outline: 'border-base text-base hover:bg-base hover:text-content',
      ghost: 'text-base hover:bg-base/20 hover:text-content',
      link: 'text-base font-bold underline-offset-4 hover:underline',
      disabled: 'opacity-50',
    },
    size: {
      sm: 'h-10 px-4 text-sm',
      md: 'h-12 px-6',
      lg: 'h-14 px-8 text-lg',
    },
  },
  defaultVariants: {
    color: 'primary',
    variant: 'default',
    size: 'md',
  },
});

export default forwardRef(Button);
export { buttonVariants };
