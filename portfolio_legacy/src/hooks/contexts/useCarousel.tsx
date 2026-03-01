import { useContext } from 'react';

import { CarouselContext } from '@/contexts';

const useCarouselContext = () => {
  const context = useContext(CarouselContext);

  if (context === undefined)
    throw new Error(
      'useCarouselContext must be used within a CarouselProvider'
    );

  return context;
};

export { useCarouselContext };
