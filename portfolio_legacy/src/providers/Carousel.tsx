'use client';

import { ComponentProps, useMemo, useState } from 'react';

import { CarouselContext } from '@/contexts';
import { CarouselContextState } from '@/contexts/Carousel';

type CarouselProviderProps = Omit<
  ComponentProps<typeof CarouselContext.Provider>,
  'value'
>;

const CarouselProvider = (props: CarouselProviderProps) => {
  const [state, setState] = useState<CarouselContextState['state']>({
      activeIdx: 0,
      progress: 0
    }),
    value: CarouselContextState = useMemo(
      () => ({ state, setState }),
      [state, setState]
    );

  return (
    <CarouselContext.Provider
      value={value}
      {...props}
    />
  );
};

export { CarouselProvider };
export type { CarouselProviderProps };
