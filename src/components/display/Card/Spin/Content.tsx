import { cn } from '@/utils/cn';
import { SlotElement, SlotElementProps } from '@/components/misc/Slot/Element';

export type SpinCardContentProps = SlotElementProps<'div'>;

export const SpinCardContent = ({ className, ...props }: SpinCardContentProps) => {
  return (
    <SlotElement
      tag='div'
      className={cn(
        'perspective-1000 size-full border border-transparent transition-transform duration-500 ease-backOut transform-3d group-engaged/card:rotate-y-180',
        className
      )}
      {...props}
    />
  );
};
