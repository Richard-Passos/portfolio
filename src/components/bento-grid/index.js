import BentoGridRoot from './Root';
import BentoGridScrollAnimate from './ScrollAnimate';
import BentoGridItem from './item';

const BentoGrid = BentoGridRoot;

BentoGrid.Item = BentoGridItem;
BentoGrid.ScrollAnimate = BentoGridScrollAnimate;

export default BentoGrid;
export { BentoGridRoot as BentoGrid, BentoGridItem, BentoGridScrollAnimate };
