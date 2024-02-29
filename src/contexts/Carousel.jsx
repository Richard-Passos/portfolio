'use client';

import { createContext, useRef, useState } from 'react';

const CarouselContext = createContext({
  activeIdx: 0,
  setActiveIdx: () => {},
  progress: { current: 0 },
});

const CarouselProvider = ({ value, ...props }) => {
  const [activeIdx, setActiveIdx] = useState(0),
    progress = useRef(0);

  return (
    <CarouselContext.Provider
      value={{ activeIdx, setActiveIdx, progress, ...value }}
      {...props}
    />
  );
};

export default CarouselContext;
export { CarouselProvider };
