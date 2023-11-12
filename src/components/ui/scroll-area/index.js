import ScrollAreaCorner from './Corner';
import ScrollAreaRoot from './Root';
import ScrollAreaViewport from './Viewport';
import ScrollAreaScrollbar from './scrollbar';

const ScrollArea = ScrollAreaRoot;

ScrollArea.Corner = ScrollAreaCorner;
ScrollArea.Viewport = ScrollAreaViewport;
ScrollArea.Scrollbar = ScrollAreaScrollbar;

export default ScrollArea;
export {
  ScrollAreaRoot as ScrollArea,
  ScrollAreaCorner,
  ScrollAreaViewport,
  ScrollAreaScrollbar,
};
