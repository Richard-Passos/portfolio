import { CarouselAction } from './Action';
import { CarouselActions } from './Actions';
import { CarouselActiveIdx } from './ActiveIdx';
import { CarouselItem } from './Item';
import { CarouselPagination } from './Pagination';
import { CarouselProgress } from './Progress';
import { Carousel } from './Root';
import { CarouselTrack } from './Track';

export * from './Action';
export * from './Actions';
export * from './ActiveIdx';
export * from './Item';
export * from './Pagination';
export * from './Progress';
export * from './Root';
export * from './Track';

export default Object.assign(Carousel, {
  Action: CarouselAction,
  Actions: CarouselActions,
  ActiveIdx: CarouselActiveIdx,
  Item: CarouselItem,
  Pagination: CarouselPagination,
  Progress: CarouselProgress,
  Track: CarouselTrack
});
