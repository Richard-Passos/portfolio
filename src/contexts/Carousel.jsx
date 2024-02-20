'use client';

import { createContext } from 'react';

const CarouselContext = createContext({
  activeIdx: 0,
  progress: { current: 0 },
});

export default CarouselContext;
