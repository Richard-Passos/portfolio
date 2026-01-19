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
      className={cn('splide__arrows gap-xs flex items-center', className)}
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
