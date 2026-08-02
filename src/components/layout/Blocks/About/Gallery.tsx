import { BentoGridItem, BentoGridItemProps } from '@/components/display/BentoGrid';
import { MergeProps } from '@/types/MergeProps';
import { GalleryCardsCarousel } from '@/components/modules/Carousel/GalleryCards';
import { cn } from '@/utils/cn';

export type AboutGalleryProps = MergeProps<
  { value?: BentoGridItemProps['value']; images: string[] },
  BentoGridItemProps
>;

export const AboutGallery = ({ images, className, ...props }: AboutGalleryProps) => {
  return (
    <BentoGridItem
      value='gallery'
      className={cn('aspect-square border bg-body', className)}
      {...props}
    >
      <GalleryCardsCarousel
        items={images}
        slideProps={{ className: 'aspect-square overflow-hidden' }}
      />
    </BentoGridItem>
  );
};
