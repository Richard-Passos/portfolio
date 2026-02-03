'use client';

// @ts-ignore
import { Options, Splide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import { ComponentProps } from 'react';

import CarouselProvider, { CarouselProviderProps } from '@/Providers/Carousel';
import { useCarouselContext } from '@/hooks/contexts';
import { cn } from '@/utils';

type CarouselMoleculeOwnProps = {
  options?: Options;
};

type CarouselMoleculeProps = CarouselMoleculeOwnProps &
  Omit<ComponentProps<typeof Splide>, keyof CarouselMoleculeOwnProps>;

const CarouselMolecule = ({
  options,
  className,
  ref,
  ...props
}: CarouselMoleculeProps) => {
  const { setState } = useCarouselContext();

  options = {
    autoWidth: true,
    autoHeight: true,
    focus: 'center',
    trimSpace: false,
    pagination: false,
    gap: 'calc(var(--spacing) * 2.5)',
    ...options
  };

  return (
    <Splide
      className={cn('flex w-full flex-col items-center', className)}
      hasTrack={false}
      onMove={(carousel: any) => {
        const end = carousel.length - 1,
          rate = Math.min(carousel.index / end, 1);

        setState({
          activeIdx: carousel.index,
          progress: rate
        });
      }}
      options={options}
      tag='section'
      {...props}
    />
  );
};

type CarouselMoleculeWithProviderOwnProps = {};

type CarouselMoleculeWithProviderProps = CarouselMoleculeWithProviderOwnProps &
  Omit<
    CarouselProviderProps & CarouselMoleculeProps,
    keyof CarouselMoleculeWithProviderOwnProps
  >;

const CarouselMoleculeWithProvider = (
  props: CarouselMoleculeWithProviderProps
) => {
  return (
    <CarouselProvider>
      <CarouselMolecule {...props} />
    </CarouselProvider>
  );
};

export default CarouselMoleculeWithProvider;
export type { CarouselMoleculeProps };
