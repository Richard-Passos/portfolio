import { VariantProps, cva } from 'class-variance-authority';

import { MergeProps } from '@/types/MergeProps';
import { cn } from '@/utils/cn';
import { Colors } from '@/types/Colors';
import { SlotElement } from '@/components/misc/Slot/Element';
import { ComponentProps } from 'react';

export type BadgeProps = MergeProps<
  {
    color?: Colors;
  } & VariantProps<typeof BadgeVariants>,
  ComponentProps<'div'>
>;

export const BadgeVariants = cva('', {
  variants: {
    size: {
      sm: 'text-xs [--gap:--spacing(1)] [--h:--spacing(4)] [--px:--spacing(1.5)]',
      md: 'text-sm [--gap:--spacing(1.5)] [--h:--spacing(6)] [--px:--spacing(2.5)]',
      lg: '[--gap:--spacing(1.5)] [--h:--spacing(8)] [--px:--spacing(2.5)]'
    },
    variant: {
      default: 'bg-(--bg) text-(--color)',
      subtle: 'bg-(--bg)/8 text-(--bg)',
      ghost: 'text-(--bg)'
    }
  }
});

export const Badge = ({
  size = 'md',
  color = 'body',
  variant = 'default',
  className,
  style,
  ...props
}: BadgeProps) => {
  return (
    <SlotElement
      tag='div'
      className={cn(
        'group/badge inline-flex h-(--h) w-fit shrink-0 items-center justify-center gap-(--gap) rounded-full border border-transparent px-(--px) font-medium whitespace-nowrap',
        BadgeVariants({ size, variant }),
        className
      )}
      style={
        {
          '--bg': `hsl(var(--${color}))`,
          '--color': `hsl(var(--${color}-emphasis))`,
          ...style
        } as typeof style
      }
      {...props}
    />
  );
};
