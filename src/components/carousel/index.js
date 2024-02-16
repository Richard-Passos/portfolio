import CarouselAction from './Action';
import CarouselActions from './Actions';
import CarouselItem from './Item';
import CarouselRoot from './Root';
import CarouselTrack from './Track';

const Carousel = CarouselRoot;

Carousel.Action = CarouselAction;
Carousel.Actions = CarouselActions;
Carousel.Item = CarouselItem;
Carousel.Track = CarouselTrack;

export default Carousel;
export {
  CarouselRoot as Carousel,
  CarouselAction,
  CarouselActions,
  CarouselItem,
  CarouselTrack,
};
