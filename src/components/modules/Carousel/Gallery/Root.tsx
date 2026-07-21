import data from './.data';

import { cn } from '@/utils/cn';
import Carousel, { CarouselProps } from '@/components/modules/Carousel';

export type GalleryCarouselImage = {
  src: string;
  alt: string;
};

export type GalleryCarouselProps = CarouselProps;

export const GalleryCarousel = ({
  options,
  className,
  children,
  ...props
}: GalleryCarouselProps) => {
  return (
    <Carousel
      options={{
        type: 'loop',
        arrows: false,
        i18n: data,
        ...options
      }}
      className={cn('relative', className)}
      {...props}
    >
      <Carousel.Track>{children}</Carousel.Track>

      <Carousel.Pagination className='absolute bottom-2' />
    </Carousel>
  );
};
