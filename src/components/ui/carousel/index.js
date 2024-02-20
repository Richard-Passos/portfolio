import CarouselAction from './Action';
import CarouselActions from './Actions';
import CarouselActiveIdx from './ActiveIdx';
import CarouselItem from './Item';
import CarouselRoot from './Root';
import CarouselTrack from './Track';
import CarouselProgress from './progress';

const Carousel = CarouselRoot;

Carousel.Action = CarouselAction;
Carousel.Actions = CarouselActions;
Carousel.ActiveIdx = CarouselActiveIdx;
Carousel.Item = CarouselItem;
Carousel.Track = CarouselTrack;
Carousel.Progress = CarouselProgress;

export default Carousel;
export {
  CarouselRoot as Carousel,
  CarouselAction,
  CarouselActions,
  CarouselActiveIdx,
  CarouselItem,
  CarouselTrack,
  CarouselProgress,
};
