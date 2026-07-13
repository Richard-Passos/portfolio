import { cn } from '@/utils/cn';
import { SlotElement, SlotElementProps } from '@/components/misc/Slot/Element';

export type BoldCardIconProps = SlotElementProps<'div'>;

export const BoldCardIcon = ({ className, ...props }: BoldCardIconProps) => {
  return (
    <SlotElement
      tag='div'
      className={cn('*:size-8', className)}
      {...props}
    />
  );
};
