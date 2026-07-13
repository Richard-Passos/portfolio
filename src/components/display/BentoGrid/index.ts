import { BentoGridItem } from './Item';
import { BentoGridRoot } from './Root';
import { BentoGridScrollAnimate } from './ScrollAnimate';

export * from './Item';
export * from './Root';
export * from './ScrollAnimate';

const BentoGrid = Object.assign(BentoGridRoot, {
  Item: BentoGridItem,
  ScrollAnimate: BentoGridScrollAnimate
});

export { BentoGrid };
