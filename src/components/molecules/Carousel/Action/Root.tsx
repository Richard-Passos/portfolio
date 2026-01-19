import Slot, { SlotProps } from '@/components/atoms/Slot';
import { cn } from '@/utils';

const ACTIONS = {
  next: 'splide__arrow--next',
  prev: 'splide__arrow--prev'
};

type CarouselActionMoleculeOwnProps = {
  action: keyof typeof ACTIONS;
};

type CarouselActionMoleculeProps = CarouselActionMoleculeOwnProps &
  Omit<SlotProps, keyof CarouselActionMoleculeOwnProps>;

const CarouselActionMolecule = ({
  action,
  className,
  ...props
}: CarouselActionMoleculeProps) => {
  return (
    <Slot
      className={cn('splide__arrow', ACTIONS[action], className)}
      {...props}
    />
  );
};

export default CarouselActionMolecule;
export type { CarouselActionMoleculeProps };
