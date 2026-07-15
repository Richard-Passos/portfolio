'use client';

import { ComponentProps, createContext, useContext, useState } from 'react';

import { MergeProps } from '@/types/MergeProps';

export type CarouselContextState = {
  state: {
    activeIdx: number;
    progress: number;
  };
  setState: ({ activeIdx, progress }: { activeIdx: number; progress: number }) => void;
};

const CarouselContext = createContext<CarouselContextState | null>(null);

export type CarouselProviderProps = MergeProps<
  {},
  ComponentProps<typeof CarouselContext.Provider>,
  'value'
>;

export const CarouselProvider = (props: CarouselProviderProps) => {
  const [state, setState] = useState<CarouselContextState['state']>({
    activeIdx: 0,
    progress: 0
  });

  return (
    <CarouselContext.Provider
      value={{ state, setState }}
      {...props}
    />
  );
};

export const useCarouselContext = () => {
  const context = useContext(CarouselContext);

  if (!context) {
    throw new Error('useCarouselContext must be used within a CarouselProvider.');
  }

  return context;
};
