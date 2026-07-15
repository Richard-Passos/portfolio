import { cn } from '@/utils/cn';
import { SlotElement, SlotElementProps } from '@/components/misc/Slot/Element';

export type SimpleCardIconProps = SlotElementProps<'div'>;

export const SimpleCardIcon = ({ className, ...props }: SimpleCardIconProps) => {
  return (
    <SlotElement
      tag='div'
      className={cn('*:size-6', className)}
      {...props}
    />
  );
};
