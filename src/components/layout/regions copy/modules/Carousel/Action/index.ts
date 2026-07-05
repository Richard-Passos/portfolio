import { CarouselActionGroup } from './Group';
import { CarouselActionRoot } from './Root';

export * from './Root';
export * from './Group';

const CarouselAction = Object.assign(CarouselActionRoot, {
  Group: CarouselActionGroup
});

export { CarouselAction };
