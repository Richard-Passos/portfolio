import { cn } from '@/utils/cn';
import { SlotElement, SlotElementProps } from '@/components/misc/Slot/Element';

export type ScrollBandsProps = SlotElementProps<'ul'>;

export const ScrollBands = ({ className, ...props }: ScrollBandsProps) => {
  return (
    <SlotElement
      tag='ul'
      className={cn('w-full overflow-x-clip', className)}
      {...props}
    />
  );
};
