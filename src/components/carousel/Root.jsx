'use client';

import { Splide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';

import { cn } from '@/utils';

const Carousel = ({ options, className, ...props }) => {
  options = {
    autoWidth: true,
    autoHeight: true,
    focus: 'center',
    trimSpace: false,
    pagination: false,
    updateOnMove: true,
    gap: 'var(--gap-sm)',
    ...options,
  };

  return (
    <Splide
      className={cn('flex w-full flex-col items-center gap-sm', className)}
      hasTrack={false}
      options={options}
      tag='section'
      {...props}
    />
  );
};

export default Carousel;
