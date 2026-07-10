import { VariantProps, cva } from 'class-variance-authority';
import { ComponentProps } from 'react';

import { COLORS } from '@/common/COLORS';
import { Slot, SlotAsChildProps } from '@/components/misc/Slot';
import { MergeProps } from '@/types/MergeProps';
import { cn } from '@/utils/cn';

export type ButtonProps = SlotAsChildProps<
  MergeProps<
    {
      iconOnly?: boolean;
      color?: (typeof COLORS)[number];
    } & VariantProps<typeof buttonVariants>,
    ComponentProps<'button'>
  >
>;

export const buttonVariants = cva(
  'inline-flex shrink-0 cursor-pointer items-center justify-center gap-(--gap) rounded border border-transparent px-(--px) font-medium whitespace-nowrap transition-[background-color] disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      size: {
        sm: 'h-8 text-sm [--gap:--spacing(1)] [--px:--spacing(2.5)] [&_svg]:size-4',
        md: 'h-10 [--gap:--spacing(1.5)] [--px:--spacing(2.5)] [&_svg]:size-5',
        lg: 'h-12 [--gap:--spacing(1.5)] [--px:--spacing(2.5)] [&_svg]:size-6'
      },
      variant: {
        default: 'bg-(--bg) text-(--color) hover:bg-(--hover)',
        subtle: 'bg-(--bg)/8 text-(--bg) hover:bg-(--bg)/16',
        ghost: 'text-(--bg) hover:bg-(--bg)/16',
        link: 'text-(--color)'
      }
    }
  }
);

export const Button = ({
  asChild,
  size = 'md',
  color = 'body',
  variant = 'default',
  iconOnly,
  className,
  style,
  ...props
}: ButtonProps) => {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      aria-disabled={props.disabled ? true : undefined}
      className={cn(
        buttonVariants({ size, variant }),
        iconOnly && 'aspect-square [--px:0]',
        variant === 'default' && color === 'body' && 'border-border',
        className
      )}
      style={
        {
          '--bg': `hsl(var(--${color}))`,
          '--hover': `hsl(var(--${color}-hover))`,
          '--color': `hsl(var(--${color}-emphasis))`,
          ...style
        } as typeof style
      }
      {...props}
    />
  );
};
