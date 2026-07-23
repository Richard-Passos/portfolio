import { VariantProps, cva } from 'class-variance-authority';

import { MergeProps } from '@/types/MergeProps';
import { cn } from '@/utils/cn';
import { Colors } from '@/types/Colors';
import { SlotElement, SlotElementProps } from '@/components/misc/Slot/Element';

export type ButtonProps = MergeProps<
  {
    iconOnly?: boolean;
    color?: Colors;
  } & VariantProps<typeof buttonVariants>,
  SlotElementProps<'button'>
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
  size = 'md',
  color = 'body',
  variant = 'default',
  iconOnly,
  className,
  style,
  ...props
}: ButtonProps) => {
  return (
    <SlotElement
      tag='button'
      aria-disabled={props.disabled ? true : undefined}
      className={cn(
        'group/button inline-flex h-(--h) shrink-0 cursor-pointer items-center justify-center gap-(--gap) rounded border border-transparent px-(--px) font-medium whitespace-nowrap transition-[background-color] disabled:cursor-not-allowed disabled:opacity-50 engaged:z-10',
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
