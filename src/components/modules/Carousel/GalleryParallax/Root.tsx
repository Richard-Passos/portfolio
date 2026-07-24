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
  return (
    <Swiper
      loop
      parallax
      keyboard
      grabCursor
      centeredSlides
      spaceBetween={16}
      a11y={data}
      slidesPerView='auto'
      pagination={{ clickable: true }}
      className={cn('w-full', className)}
      modules={[Parallax, Pagination, Keyboard, A11y, ...(modules ?? [])]}
      {...props}
    >
      {items.map((src) => (
        <SwiperSlide
          {...slideProps}
          key={src}
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
