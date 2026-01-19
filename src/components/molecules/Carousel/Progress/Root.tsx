'use client';

import Progress, { ProgressProps } from '@/components/atoms/Progress';
import { useCarouselContext } from '@/hooks/contexts';

type CarouselProgressMoleculeOwnProps = Pick<Partial<ProgressProps>, 'value'>;

type CarouselProgressMoleculeProps = CarouselProgressMoleculeOwnProps &
  Omit<ProgressProps, keyof CarouselProgressMoleculeOwnProps>;

const CarouselProgressMolecule = (props: CarouselProgressMoleculeProps) => {
  const { state } = useCarouselContext();

  return (
    <Progress
      size='xs'
      value={state.progress * 100}
      {...props}
    />
  );
};

export default CarouselProgressMolecule;
export type { CarouselProgressMoleculeProps };
