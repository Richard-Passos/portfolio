'use client';

import data from './.data';

import { Parallax, Pagination, Keyboard, A11y } from 'swiper/modules';
import { Swiper, SwiperProps, SwiperSlide, SwiperSlideProps } from 'swiper/react';
import 'swiper/css/parallax';
import { MergeProps } from '@/types/MergeProps';
import { Image, ImageProps } from '@/components/display/Image';
import { cn } from '@/utils/cn';
import 'swiper/css';
import 'swiper/css/parallax';
import 'swiper/css/pagination';

export type GalleryParallaxCarouselProps = MergeProps<
  {
    items: string[];
    slideProps?: SwiperSlideProps;
    imageProps?: ImageProps;
  },
  SwiperProps
>;

export const GalleryParallaxCarousel = ({
  items,
  slideProps,
  imageProps,
  modules,
  className,
  ...props
}: GalleryParallaxCarouselProps) => {
  // 4 slides minimum
  if (items.length === 1) {
    items = [...items, ...items, ...items, ...items];
  } else if (items.length === 2) {
    items = [...items, ...items];
  } else if (items.length === 3) {
    items = [...items, ...items];
  }

  return (
    <Swiper
      loop
      parallax
      keyboard
      grabCursor
      a11y={data}
      centeredSlides
      spaceBetween={16}
      slidesPerView='auto'
      pagination={{ clickable: true }}
      className={cn('w-full', className)}
      modules={[Parallax, Pagination, Keyboard, A11y, ...(modules ?? [])]}
      {...props}
    >
      {items.map((src, i) => (
        <SwiperSlide
          {...slideProps}
          key={`${i}${src}`}
          className={cn('overflow-hidden bg-muted select-none', slideProps?.className)}
        >
          <div
            data-swiper-parallax='26%'
            className='absolute inset-x-[-7%] inset-y-0'
          >
            <Image
              role='presentation'
              src={src}
              alt=''
              width={1080}
              height={700}
              className='size-full object-cover'
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
