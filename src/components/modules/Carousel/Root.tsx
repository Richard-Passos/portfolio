'use client';

// @ts-ignore
import { Options, Splide } from '@splidejs/react-splide';
import { ComponentProps, ReactNode, useCallback, useMemo } from 'react';

import { MergeProps } from '@/types/MergeProps';
import { cn } from '@/utils/cn';
import { useCarouselContext, CarouselProvider } from '@/contexts/Carousel';

export type CarouselProps = MergeProps<
  {
    options?: Options;
    children: ReactNode;
  } & ComponentProps<'section'>,
  ComponentProps<typeof Splide>
>;

export const CarouselBase = ({ options, className, onMove, ...props }: CarouselProps) => {
  const { setState } = useCarouselContext();

  const mergedOptions = useMemo<Options>(
    () => ({
      autoWidth: true,
      autoHeight: true,
      focus: 'center',
      trimSpace: false,
      gap: 'calc(var(--spacing) * 2.5)',
      ...options
    }),
    [options]
  );

  const handleMove = useCallback(
    (splide: any, newIndex: number, prevIndex: number, destIndex: number) => {
      const end = Math.max(splide.length - 1, 1),
        rate = Math.min(splide.index / end, 1);

      setState({
        activeIdx: splide.index,
        progress: rate
      });

      onMove?.(splide, newIndex, prevIndex, destIndex);
    },
    [setState, onMove]
  );

  return (
    <Splide
      tag='section'
      options={mergedOptions}
      hasTrack={false}
      onMove={handleMove}
      className={cn('flex w-full flex-col items-center', className)}
      {...props}
    />
  );
};

export const Carousel = (props: CarouselProps) => {
  return (
    <CarouselProvider>
      <CarouselBase {...props} />
    </CarouselProvider>
  );
};
