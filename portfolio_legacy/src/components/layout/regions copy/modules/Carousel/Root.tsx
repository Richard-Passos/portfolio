'use client';

// @ts-ignore
import { Options, Splide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import { ComponentProps, useCallback, useMemo } from 'react';

import { useCarouselContext } from '@/hooks/contexts';
import { CarouselProvider } from '@/providers/Carousel';
import { MergeProps } from '@/types';
import { cn } from '@/utils';

type CarouselRootProps = MergeProps<
  {
    options?: Options;
  },
  ComponentProps<typeof Splide>
>;

const CarouselBase = ({
  options,
  className,
  onMove,
  ...props
}: CarouselRootProps) => {
  const { setState } = useCarouselContext();

  const mergedOptions = useMemo<Options>(
    () => ({
      autoWidth: true,
      autoHeight: true,
      focus: 'center',
      trimSpace: false,
      pagination: false,
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

const CarouselRoot = (props: CarouselRootProps) => {
  return (
    <CarouselProvider>
      <CarouselBase {...props} />
    </CarouselProvider>
  );
};

export { CarouselRoot };
export type { CarouselRootProps };
