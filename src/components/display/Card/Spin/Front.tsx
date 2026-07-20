import { cn } from '@/utils/cn';
import { SlotElement, SlotElementProps } from '@/components/misc/Slot/Element';

export type SpinCardFrontProps = SlotElementProps<'div'>;

export const SpinCardFront = ({ className, ...props }: SpinCardFrontProps) => {
  return (
    <SlotElement
      tag='div'
      className={cn('flex size-full items-center justify-center backface-hidden', className)}
      {...props}
    />
  );
};
