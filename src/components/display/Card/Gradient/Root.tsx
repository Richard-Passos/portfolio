import { SlotElement, SlotElementProps } from '@/components/misc/Slot/Element';
import { MergeProps } from '@/types/MergeProps';
import { cn } from '@/utils/cn';

export type GradientCardProps = MergeProps<
  {
    gradient: string;
  },
  SlotElementProps<'section'>
>;

export const GradientCard = ({ gradient, className, style, ...props }: GradientCardProps) => {
  return (
    <SlotElement
      tag='section'
      className={cn(
        'relative isolate flex min-h-80 flex-col border bg-muted/75 p-9',
        'before:absolute before:inset-0 before:-z-10 before:[background:var(--bg)]',
        'after:absolute after:inset-3 after:-z-10 after:bg-body',
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
