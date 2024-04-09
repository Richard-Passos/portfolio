import BentoGridItem from './Item';
import BentoGridScrollAnimate from './ScrollAnimate';
import BentoGridRoot from './Root';

const BentoGrid = BentoGridRoot;

BentoGrid.Item = BentoGridItem;
BentoGrid.ScrollAnimate = BentoGridScrollAnimate;

export default BentoGrid;
export { 
  BentoGridRoot as BentoGrid, 
  BentoGridItem,
  BentoGridScrollAnimate,
};
