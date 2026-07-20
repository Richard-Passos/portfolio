import { cn } from '@/utils/cn';
import { SlotElement, SlotElementProps } from '@/components/misc/Slot/Element';

export type SpinCardGroupProps = SlotElementProps<'ul'>;

export const SpinCardGroup = ({ className, ...props }: SpinCardGroupProps) => {
  return (
    <SlotElement
      tag='ul'
      className={cn('group flex w-full flex-wrap justify-center', className)}
      {...props}
    />
  );
};
