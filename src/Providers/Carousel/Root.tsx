'use client';

import { ComponentProps, useId, useMemo, useState } from 'react';

import { CarouselContext } from '@/contexts';
import {
  CarouselContextInitialState,
  carouselContextDefaultValue
} from '@/contexts/Carousel';

type CarouselProviderOwnProps = {};

type CarouselProviderProps = CarouselProviderOwnProps &
  Omit<ComponentProps<typeof CarouselContext.Provider>, 'value'>;

const CarouselProvider = (props: CarouselProviderProps) => {
  const [state, setState] = useState<CarouselContextInitialState['state']>(
    carouselContextDefaultValue.state
  );
  const id = useId();

  const value: CarouselContextInitialState = useMemo(
    () => ({ id, state, setState }),
    [id, state]
  );

  return (
    <CarouselContext.Provider
      value={value}
      {...props}
    />
  );
};

export default CarouselProvider;
export type { CarouselProviderProps };
