import BentoGridItem from './Item';
import BentoGridRoot from './Root';

const BentoGrid = BentoGridRoot;

BentoGrid.Item = BentoGridItem;

export default BentoGrid;
export { BentoGridRoot as BentoGrid, BentoGridItem };
