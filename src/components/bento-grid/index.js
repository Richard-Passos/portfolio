import BentoGridItem from './Item';
import BentoGridRoot from './Root';
import BentoGridScrollAnimate from './ScrollAnimate';

const BentoGrid = BentoGridRoot;

BentoGrid.Item = BentoGridItem;
BentoGrid.ScrollAnimate = BentoGridScrollAnimate;

export default BentoGrid;
export { BentoGridRoot as BentoGrid, BentoGridItem, BentoGridScrollAnimate };
