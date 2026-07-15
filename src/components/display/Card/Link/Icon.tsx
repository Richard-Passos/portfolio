import { cn } from '@/utils/cn';
import { SlotElement, SlotElementProps } from '@/components/misc/Slot/Element';

export type LinkCardIconProps = SlotElementProps<'div'>;

export const LinkCardIcon = ({ className, ...props }: LinkCardIconProps) => {
  return (
    <SlotElement
      tag='div'
      className={cn(
        'flex size-10 items-center justify-center rounded-sm border *:size-2/3',
        className
      )}
      {...props}
    />
  );
};
