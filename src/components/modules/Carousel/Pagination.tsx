import { cn } from '@/utils/cn';
import { SlotElement, SlotElementProps } from '@/components/misc/Slot/Element';

export type CarouselPaginationProps = SlotElementProps<'ul'>;

export const CarouselPagination = ({ className, ...props }: CarouselPaginationProps) => {
  return (
    <SlotElement
      tag='ul'
      className={cn('splide__pagination', className)}
      {...props}
    />
  );
};
