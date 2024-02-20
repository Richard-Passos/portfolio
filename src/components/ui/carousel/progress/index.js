import CarouselProgessIndicator from './Indicator';
import CarouselProgessRoot from './Root';

const CarouselProgess = CarouselProgessRoot;

CarouselProgess.Indicator = CarouselProgessIndicator;

export default CarouselProgess;
export { CarouselProgessRoot as CarouselProgess, CarouselProgessIndicator };
