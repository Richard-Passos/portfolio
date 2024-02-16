'use client';

import { SplideTrack } from '@splidejs/react-splide';

import { cn } from '@/utils';

import { CursorArea, CursorHover } from '../ui/cursor';

const CarouselTrack = ({ content, variant, className, ...props }) => {
  return (
    <CursorArea>
      <CursorHover
        content={{
          type: 'icon',
          name: 'Width',
          ...content,
        }}
        variant={{ scaleX: 1, scaleY: 1, ...variant }}
      >
        <SplideTrack
          className={cn('w-full cursor-grab active:cursor-grabbing', className)}
          {...props}
        />
      </CursorHover>
    </CursorArea>
  );
};

export default CarouselTrack;
