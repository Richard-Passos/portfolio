import { CarouselAction } from './Action';
import { CarouselActiveIdx } from './ActiveIdx';
import { CarouselItem } from './Item';
import { CarouselProgress } from './Progress';
import { CarouselRoot } from './Root';
import { CarouselTrack } from './Track';

export * from './Action';
export * from './ActiveIdx';
export * from './Item';
export * from './Progress';
export * from './Root';
export * from './Track';

const Carousel = Object.assign(CarouselRoot, {
  Action: CarouselAction,
  ActiveIdx: CarouselActiveIdx,
  Item: CarouselItem,
  Progress: CarouselProgress,
  Track: CarouselTrack
});

export { Carousel };
