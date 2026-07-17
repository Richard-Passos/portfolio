'use client';

import { cn } from '@/utils/cn';
// @ts-ignore
import { SplideSlide } from '@splidejs/react-splide';
import { ComponentProps } from 'react';

export type CarouselItemProps = ComponentProps<'li'>;

export const CarouselItem = ({ className, ...props }: CarouselItemProps) => {
  return (
    <SplideSlide
      className={cn('shrink-0', className)}
      {...props}
    />
  );
};
