import { ScrollBands } from './Root';
import { ScrollBandsItem } from './Item';

export * from './Root';
export * from './Item';

export default Object.assign(ScrollBands, {
  Item: ScrollBandsItem
});
