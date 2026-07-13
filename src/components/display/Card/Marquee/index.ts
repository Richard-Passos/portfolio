import { MarqueeCard } from './Root';
import { MarqueeCardIcon } from './Icon';
import { MarqueeCardItem } from './Item';
import { MarqueeCardList } from './List';
import { MarqueeCardTitle } from './Title';

export * from './Root';
export * from './Icon';
export * from './Item';
export * from './List';
export * from './Title';

export default Object.assign(MarqueeCard, {
  Icon: MarqueeCardIcon,
  Item: MarqueeCardItem,
  List: MarqueeCardList,
  Title: MarqueeCardTitle
});
