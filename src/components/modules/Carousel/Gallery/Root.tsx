import data from './.data';

import { cn } from '@/utils/cn';
import Carousel, { CarouselProps } from '@/components/modules/Carousel';
import { Button } from '@/components/input/Button';
import { CaretRightIcon } from '@/components/system/Icon/CaretRight';
import { CaretLeftIcon } from '@/components/system/Icon/CaretLeft';

export type GalleryCarouselImage = {
  src: string;
  alt: string;
};

export type GalleryCarouselProps = CarouselProps;

export const GalleryCarousel = ({ className, children, ...props }: GalleryCarouselProps) => {
  return (
    <Carousel
      className={cn('relative', className)}
      {...props}
    >
      <Carousel.Track>{children}</Carousel.Track>

      <Carousel.Actions>
        <Carousel.Action
          asChild
          action='prev'
        >
          <Button
            size='sm'
            iconOnly
            aria-label={data.prev}
            className='absolute top-1/2 left-2 -translate-y-1/2 transition-[background-color,opacity,scale] disabled:scale-85 disabled:opacity-0!'
          >
            <CaretLeftIcon />
          </Button>
        </Carousel.Action>

        <Carousel.Action
          asChild
          action='next'
        >
          <Button
            size='sm'
            iconOnly
            aria-label={data.next}
            className='absolute top-1/2 right-2 -translate-y-1/2 transition-[background-color,opacity,scale] disabled:scale-85 disabled:opacity-0!'
          >
            <CaretRightIcon />
          </Button>
        </Carousel.Action>
      </Carousel.Actions>

      <Carousel.Progress className='absolute bottom-2 w-9/10' />
    </Carousel>
  );
};
