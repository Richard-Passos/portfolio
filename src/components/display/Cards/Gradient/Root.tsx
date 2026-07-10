import { MergeProps } from '@/types/MergeProps';
import { cn } from '@/utils/cn';
import { ComponentProps } from 'react';

export type GradientCardProps = MergeProps<
  {
    gradient: string;
  },
  ComponentProps<'section'>
>;

export const GradientCard = ({ gradient, className, style, ...props }: GradientCardProps) => {
  return (
    <section
      className={cn(
        'relative isolate flex min-h-80 flex-col rounded-3xl border bg-muted/75 p-9',
        'before:absolute before:inset-0 before:-z-10 before:rounded-inherit before:[background:var(--bg)]',
        'after:absolute after:inset-3 after:-z-10 after:rounded-2xl after:bg-body',
        className
      )}
      style={
        {
          '--bg': gradient,
          ...style
        } as typeof style
      }
      {...props}
    />
  );
};
