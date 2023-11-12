import SliderRange from './Range';
import SliderRoot, { sliderOrientations, sliderVariants } from './Root';
import SliderThumb from './Thumb';
import SliderTrack from './Track';

const Slider = SliderRoot;

Slider.Range = SliderRange;
Slider.Thumb = SliderThumb;
Slider.Track = SliderTrack;

export default Slider;
export {
  SliderRoot as Slider,
  SliderRange,
  SliderThumb,
  SliderTrack,
  sliderOrientations,
  sliderVariants,
};
