import { Image, ImageProps } from '@/components/display/Image';
import { CarouselItem, CarouselItemProps } from '@/components/modules/Carousel';
import { MergeProps } from '@/types/MergeProps';
import { cn } from '@/utils/cn';

export type GalleryCarouselItemProps = MergeProps<
  Pick<ImageProps, 'src' | 'alt' | 'width' | 'height'>,
  CarouselItemProps
>;

export const GalleryCarouselItem = ({
  src,
  alt,
  width,
  height,
  className,
  ...props
}: GalleryCarouselItemProps) => {
  return (
    <CarouselItem
      className={cn('size-full bg-muted', className)}
      {...props}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className='size-full object-cover'
      />
    </CarouselItem>
  );
};
