import { cn } from '@/utils/cn';
import { SlotElement, SlotElementProps } from '@/components/misc/Slot/Element';

export type CarouselActionsProps = SlotElementProps<'section'>;

export const CarouselActions = ({ className, ...props }: CarouselActionsProps) => {
  return (
    <SlotElement
      tag='section'
      className={cn('splide__arrows flex items-center gap-2.5', className)}
      {...props}
    />
  );
};
