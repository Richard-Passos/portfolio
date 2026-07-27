import { SlotElement, SlotElementProps } from '@/components/misc/Slot/Element';
import { cn } from '@/utils/cn';

export type ErrorHeroContentProps = SlotElementProps<'div'>;

export const ErrorHeroContent = ({ className, ...props }: ErrorHeroContentProps) => {
  return (
    <SlotElement
      tag='div'
      className={cn('relative mb-24 w-9/10 max-w-5xl border-b px-[5%] py-32', className)}
      {...props}
    />
  );
};
