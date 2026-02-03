import { createPolymorphicComponent } from '@mantine/core';

import Box, { BoxProps } from '@/components/atoms/Box';
import { cn } from '@/utils';

type CarouselActionsMoleculeOwnProps = {};

type CarouselActionsMoleculeProps = CarouselActionsMoleculeOwnProps &
  Omit<BoxProps, keyof CarouselActionsMoleculeOwnProps>;

const CarouselActionsMolecule = ({
  className,
  ...props
}: CarouselActionsMoleculeProps) => {
  return (
    <Box
      className={cn('splide__arrows flex items-center gap-2.5', className)}
      component='section'
      {...props}
    />
  );
};

export default createPolymorphicComponent<
  'section',
  CarouselActionsMoleculeProps
>(CarouselActionsMolecule);
export type { CarouselActionsMoleculeProps };
