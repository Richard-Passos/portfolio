'use client';

import data from './.data';

import { Pagination, Keyboard, A11y, EffectCards } from 'swiper/modules';
import { Swiper, SwiperProps, SwiperSlide, SwiperSlideProps } from 'swiper/react';
import { MergeProps } from '@/types/MergeProps';
import { Image, ImageProps } from '@/components/display/Image';
import { cn } from '@/utils/cn';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';

export type GalleryCardsCarouselProps = MergeProps<
  {
    items: string[];
    slideProps?: SwiperSlideProps;
    imageProps?: Partial<ImageProps>;
  },
  SwiperProps
>;

export const GalleryCardsCarousel = ({
  items,
  slideProps,
  imageProps,
  modules,
  className,
  ...props
}: GalleryCardsCarouselProps) => {
  return (
    <Swiper
      keyboard
      grabCursor
      a11y={data}
      effect='cards'
      centeredSlides
      pagination={{ clickable: true }}
      className={cn('w-full', className)}
      modules={[EffectCards, Pagination, Keyboard, A11y, ...(modules ?? [])]}
      {...props}
    >
      {items.map((src) => (
        <SwiperSlide
          {...slideProps}
          key={src}
          className={cn('bg-muted select-none', slideProps?.className)}
        >
          <Image
            alt=''
            src={src}
            width={1080}
            height={700}
            role='presentation'
            {...imageProps}
            className={cn('size-full object-cover', imageProps?.className)}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
