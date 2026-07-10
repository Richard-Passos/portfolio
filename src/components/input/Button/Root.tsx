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

export const buttonVariants = cva('', {
  variants: {
    size: {
      sm: 'text-sm [--gap:--spacing(1)] [--h:--spacing(8)] [--px:--spacing(2.5)]',
      md: '[--gap:--spacing(1.5)] [--h:--spacing(10)] [--px:--spacing(4)]',
      lg: '[--gap:--spacing(1.5)] [--h:--spacing(12)] [--px:--spacing(5.5)]'
    },
    variant: {
      default: 'bg-(--bg) text-(--color) engaged:bg-(--hover)',
      subtle: 'bg-(--bg)/8 text-(--bg) engaged:bg-(--bg)/16',
      ghost: 'text-(--bg) engaged:bg-(--bg)/16',
      plain: 'text-(--color)'
    }
  }
});

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
        'inline-flex h-(--h) shrink-0 cursor-pointer items-center justify-center gap-(--gap) rounded border border-transparent px-(--px) font-medium whitespace-nowrap transition-[background-color] disabled:pointer-events-none disabled:opacity-50 engaged:z-10',
        buttonVariants({ size, variant }),
        iconOnly && 'aspect-square text-2xl [--px:0]',
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
