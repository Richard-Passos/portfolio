import { SlotElement, SlotElementProps } from '@/components/misc/Slot/Element';
import { cn } from '@/utils/cn';

export type GradientCardIconProps = SlotElementProps<'div'>;

export const GradientCardIcon = ({ className, ...props }: GradientCardIconProps) => {
  return (
    <SlotElement
      tag='div'
      className={cn(
        'mb-6 flex aspect-square w-fit rounded border bg-muted p-2 text-2xl',
        className
      )}
      {...props}
    />
  );
};
