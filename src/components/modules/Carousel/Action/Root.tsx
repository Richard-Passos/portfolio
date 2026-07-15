import { Slot, SlotProps } from '@/components/misc/Slot';
import { MergeProps } from '@/types';
import { cn } from '@/utils';

const ACTIONS = {
  next: 'splide__arrow--next',
  prev: 'splide__arrow--prev'
};

type CarouselActionRootProps = MergeProps<
  {
    action: keyof typeof ACTIONS;
  },
  SlotProps
>;

const CarouselActionRoot = ({
  action,
  className,
  ...props
}: CarouselActionRootProps) => {
  return (
    <Slot
      className={cn('splide__arrow', ACTIONS[action], className)}
      {...props}
    />
  );
};

export { CarouselActionRoot };
export type { CarouselActionRootProps };
