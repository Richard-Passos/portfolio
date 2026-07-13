import { BentoGrid } from './Root';
import { BentoGridItem } from './Item';

export * from './Root';
export * from './Item';

export default Object.assign(BentoGrid, {
  Item: BentoGridItem
});
