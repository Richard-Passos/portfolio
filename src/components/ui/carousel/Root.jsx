'use client';

import { Splide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import { forwardRef, useRef, useState } from 'react';

import { CarouselContext } from '@/contexts';
import { cn } from '@/utils';

const Carousel = ({ options, className, ...props }, ref) => {
  const [activeIdx, setActiveIdx] = useState(0),
    progress = useRef(0);

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
    <CarouselContext.Provider value={{ activeIdx, progress }}>
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
    </CarouselContext.Provider>
  );
};

export default forwardRef(Carousel);
