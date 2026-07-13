import { SlotElement, SlotElementProps } from '@/components/misc/Slot/Element';
import { cn } from '@/utils/cn';

export type BoldCardProps = SlotElementProps<'section'>;

export const BoldCard = ({ className, ...props }: BoldCardProps) => {
  return (
    <SlotElement
      tag='section'
      className={cn('flex min-h-52 flex-col justify-between border bg-body p-5', className)}
      {...props}
    />
  );
};
