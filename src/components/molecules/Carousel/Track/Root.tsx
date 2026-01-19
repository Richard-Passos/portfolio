'use client';

// @ts-ignore
import { SplideTrack } from '@splidejs/react-splide';
import { ComponentProps } from 'react';

import { cn } from '@/utils';

type CarouselTrackMoleculeOwnProps = {};

type CarouselTrackMoleculeProps = CarouselTrackMoleculeOwnProps &
  Omit<ComponentProps<typeof SplideTrack>, keyof CarouselTrackMoleculeOwnProps>;

const CarouselTrackMolecule = ({
  className,
  ...props
}: CarouselTrackMoleculeProps) => {
  return (
    <SplideTrack
      className={cn(
        `w-full cursor-grab !overflow-x-clip !overflow-y-visible active:cursor-grabbing`,
        className
      )}
      {...props}
    />
  );
};

export default CarouselTrackMolecule;
export type { CarouselTrackMoleculeProps };
