import { SlotElement, SlotElementProps } from '@/components/misc/Slot/Element';
import { MergeProps } from '@/types/MergeProps';
import { cn } from '@/utils/cn';

export const CarouselActionVariants = {
  next: 'splide__arrow--next',
  prev: 'splide__arrow--prev'
};

export type CarouselActionProps = MergeProps<
  {
    action: keyof typeof CarouselActionVariants;
  },
  SlotElementProps<'button'>
>;

export const CarouselAction = ({ action, className, ...props }: CarouselActionProps) => {
  return (
    <SlotElement
      tag='button'
      className={cn('splide__arrow', CarouselActionVariants[action], className)}
      {...props}
    />
  );
};
