import ScrollAreaScrollbarRoot from './Root';
import ScrollAreaScrollbarThumb from './Thumb';

const ScrollAreaScrollbar = ScrollAreaScrollbarRoot;

ScrollAreaScrollbar.Thumb = ScrollAreaScrollbarThumb;

export default ScrollAreaScrollbar;
export {
  ScrollAreaScrollbarRoot as ScrollAreaScrollbar,
  ScrollAreaScrollbarThumb,
};
