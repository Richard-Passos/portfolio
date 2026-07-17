'use client';

// @ts-ignore
import { SplideTrack } from '@splidejs/react-splide';
import { ComponentProps } from 'react';

import { cn } from '@/utils/cn';

export type CarouselTrackProps = ComponentProps<typeof SplideTrack>;

export const CarouselTrack = ({ className, ...props }: CarouselTrackProps) => {
  return (
    <SplideTrack
      className={cn(
        'size-full cursor-grab overflow-x-clip *:flex *:h-full active:cursor-grabbing',
        className
      )}
      {...props}
    />
  );
};
