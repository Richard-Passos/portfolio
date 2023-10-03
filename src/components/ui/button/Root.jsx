import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

import { cn, cnv } from '@/utils';

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

const buttonVariants = cnv({
  base: 'inline-flex items-center justify-center rounded-md border border-transparent font-medium transition-colors',
  variants: {
    color: {
      primary: '[--base-color:--primary] [--content-color:--primary-c]',
      secondary:
        '[--base-color:hsl(var(--secondary))] [--color:--secondary] [--content-color:hsl(var(--secondary-c))]',
      danger:
        '[--base-color:hsl(var(--danger))] [--color:--danger] [--content-color:hsl(var(--danger-c))]',
      base: '[--base-color:hsl(var(--base))] [--color:--base] [--content-color:hsl(var(--base-c))]',
    },
    variant: {
      default:
        'bg-[--base-color] text-[--content-color] hover:bg-[hsl(var(--color)/.8)]',
      outline:
        'border-[--base-color] text-[--base-color] hover:bg-[--base-color] hover:text-[--content-color]',
      ghost: 'text-[--content-color] hover:bg-[hsl(var(--color)/.2)]',
      link: 'font-bold text-[--base-color] underline-offset-4 hover:underline',
      disabled: '',
    },
    size: {
      sm: 'h-10 px-4 text-sm',
      md: 'text-md h-12 px-6',
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
