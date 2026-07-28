'use client';

import { Pagination, Keyboard, A11y, EffectCards } from 'swiper/modules';
import { Swiper, SwiperProps, SwiperSlide, SwiperSlideProps } from 'swiper/react';
import { MergeProps } from '@/types/MergeProps';
import { Image, ImageProps } from '@/components/display/Image';
import { cn } from '@/utils/cn';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';
import { useIntlayer } from 'next-intlayer';

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
  const t = useIntlayer('gallery-cards-carousel');

  return (
    <Swiper
      keyboard
      grabCursor
      a11y={{
        prevSlideMessage: t.prevSlideMessage.value,
        nextSlideMessage: t.nextSlideMessage.value,
        firstSlideMessage: t.firstSlideMessage.value,
        lastSlideMessage: t.lastSlideMessage.value,
        paginationBulletMessage: t.paginationBulletMessage.value,
        slideLabelMessage: t.slideLabelMessage.value,
        containerMessage: t.containerMessage.value,
        containerRoleDescriptionMessage: t.containerRoleDescriptionMessage.value,
        itemRoleDescriptionMessage: t.itemRoleDescriptionMessage.value
      }}
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
