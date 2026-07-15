import { SlotElement, SlotElementProps } from '@/components/misc/Slot/Element';
import { cn } from '@/utils/cn';

export type BoldCardProps = SlotElementProps<'section'>;

export const BoldCard = ({ className, ...props }: BoldCardProps) => {
  return (
    <SlotElement
      tag='section'
      className={cn('flex h-full min-h-64 flex-col justify-between border bg-body p-5', className)}
      {...props}
    />
  );
};
