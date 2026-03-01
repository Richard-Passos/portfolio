'use client';

// @ts-ignore
import { SplideTrack } from '@splidejs/react-splide';
import { ComponentProps } from 'react';

import { cn } from '@/utils';

type CarouselTrackProps = ComponentProps<typeof SplideTrack>;

const CarouselTrack = ({ className, ...props }: CarouselTrackProps) => {
  return (
    <SplideTrack
      className={cn(
        `w-full cursor-grab overflow-x-clip! overflow-y-visible! active:cursor-grabbing`,
        className
      )}
      {...props}
    />
  );
};

export { CarouselTrack };
export type { CarouselTrackProps };
