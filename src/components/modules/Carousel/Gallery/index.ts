import { GalleryCarousel } from './Root';
import { GalleryCarouselItem } from './Item';

export * from './Root';
export * from './Item';

export default Object.assign(GalleryCarousel, {
  Item: GalleryCarouselItem
});
