import { SlotElement, SlotElementProps } from '@/components/misc/Slot/Element';
import { cn } from '@/utils/cn';

export type SimpleCardProps = SlotElementProps<'section'>;

export const SimpleCard = ({ className, ...props }: SimpleCardProps) => {
  return (
    <SlotElement
      tag='section'
      className={cn('flex h-full items-center gap-4 border bg-body p-5', className)}
      {...props}
    />
  );
};
