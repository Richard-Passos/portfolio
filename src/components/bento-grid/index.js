import BentoGridRoot from './Root';
import BentoGridItem from './Item';

const BentoGrid = BentoGridRoot

BentoGrid.Item = BentoGridItem;

export default BentoGrid;
export {
BentoGridRoot as BentoGrid,
BentoGridItem
}