import { cn } from '@/utils/cn';
import { SlotElement, SlotElementProps } from '@/components/misc/Slot/Element';

export type MarqueeCardIconProps = SlotElementProps<'div'>;

export const MarqueeCardIcon = ({ className, ...props }: MarqueeCardIconProps) => {
  return (
    <SlotElement
      tag='div'
      className={cn('self-tart justify-self-start *:size-8', className)}
      {...props}
    />
  );
};
