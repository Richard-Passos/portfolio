'use client';

import { createContext } from 'react';

type CarouselContextState = {
  state: {
    activeIdx: number;
    progress: number;
  };
  setState: ({
    activeIdx,
    progress
  }: {
    activeIdx: number;
    progress: number;
  }) => void;
};

const CarouselContext = createContext<CarouselContextState | undefined>(
  undefined
);

export { CarouselContext };
export type { CarouselContextState };
