import { SlotElement, SlotElementProps } from '@/components/misc/Slot/Element';
import { cn } from '@/utils/cn';

export type TimeCardProps = SlotElementProps<'section'>;

export const TimeCard = ({ className, ...props }: TimeCardProps) => {
  return (
    <SlotElement
      tag='section'
      className={cn(
        'flex min-h-52 flex-col items-center justify-center border bg-body p-5',
        className
      )}
      {...props}
    />
  );
};
