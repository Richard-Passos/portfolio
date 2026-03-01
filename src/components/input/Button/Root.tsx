import { ark } from '@ark-ui/react/factory';
import { type VariantProps, cva } from 'class-variance-authority';
import { ComponentProps } from 'react';

import { COLORS } from '@/common';
import { Spinner } from '@/components/feedback';
import { MergeProps } from '@/types';
import { cn } from '@/utils';

export type ButtonProps = MergeProps<
  { isLoading?: boolean; color?: (typeof COLORS)[number] } & VariantProps<typeof buttonVariants>,
  ComponentProps<typeof ark.button>
>;

export const buttonVariants = cva(
  'inline-flex shrink-0 cursor-pointer items-center justify-center rounded border border-transparent font-medium whitespace-nowrap transition-[background-color] disabled:pointer-events-none disabled:opacity-50 [&_svg]:shrink-0',
  {
    variants: {
      size: {
        sm: 'h-8 gap-1 px-2.5 text-sm [&_svg:not([class*="size-"],[class*="h-"],[class*="w-"])]:size-4',
        md: 'h-10 gap-1.5 px-2.5 [&_svg:not([class*="size-"],[class*="h-"],[class*="w-"])]:size-5',
        lg: 'h-12 gap-1.5 px-2.5 [&_svg:not([class*="size-"],[class*="h-"],[class*="w-"])]:size-6'
      },
      variant: {
        default: 'bg-(--bg) text-(--color) hover:bg-(--hover)',
        subtle: 'bg-(--bg)/8 text-(--bg) hover:bg-(--bg)/16',
        ghost: 'hover:bg-(--bg)/16'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'md'
    }
  }
);

export const Button = ({
  size = 'md',
  color = 'body',
  variant = 'default',
  isLoading,
  className,
  style,
  children,
  ...props
}: ButtonProps) => {
  return (
    <ark.button
      aria-disabled={props.disabled ? true : undefined}
      data-loading={isLoading ? true : undefined}
      className={cn(buttonVariants({ size, variant, className }))}
      style={
        {
          '--bg': `hsl(var(--${color}))`,
          '--hover': `hsl(var(--${color}-hover))`,
          '--color': `hsl(var(--${color}-emphasis))`,
          ...style
        } as typeof style
      }
      {...props}
    >
      {!props.asChild && isLoading ? <Spinner /> : children}
    </ark.button>
  );
};
