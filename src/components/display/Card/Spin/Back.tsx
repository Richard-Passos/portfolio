import { cn } from '@/utils/cn';
import { SlotElement, SlotElementProps } from '@/components/misc/Slot/Element';

export type SpinCardBackProps = SlotElementProps<'div'>;

export const SpinCardBack = ({ className, ...props }: SpinCardBackProps) => {
  return (
    <SlotElement
      tag='div'
      className={cn(
        'absolute inset-0 flex rotate-y-180 items-center justify-center border bg-body backface-hidden',
        className
      )}
      {...props}
    />
  );
};
