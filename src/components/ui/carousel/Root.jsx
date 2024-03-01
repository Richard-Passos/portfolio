'use client';

import { Splide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import { forwardRef, useContext } from 'react';

import { CarouselContext, CarouselProvider } from '@/contexts';
import { cn } from '@/utils';

const Carousel = forwardRef(({ options, className, ...props }, ref) => {
  const { setActiveIdx, progress } = useContext(CarouselContext);

  options = {
    autoWidth: true,
    autoHeight: true,
    focus: 'center',
    trimSpace: false,
    pagination: false,
    gap: 'var(--spacing-sm)',
    ...options,
  };

  return (
    <Splide
      className={cn('flex w-full flex-col items-center gap-sm', className)}
      hasTrack={false}
      onMove={(carousel) => {
        const end = carousel.length - 1,
          rate = Math.min(carousel.index / end, 1);

        progress.current = rate;
        setActiveIdx(carousel.index);
      }}
      options={options}
      ref={ref}
      tag='section'
      {...props}
    />
  );
});
Carousel.displayName = 'Carousel';

const CarouselWithProvider = (props, ref) => {
  return (
    <CarouselProvider>
      <Carousel
        ref={ref}
        {...props}
      />
    </CarouselProvider>
  );
};

export default forwardRef(CarouselWithProvider);
