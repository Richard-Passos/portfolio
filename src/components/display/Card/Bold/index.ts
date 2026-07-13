import { BoldCard } from './Root';
import { BoldCardIcon } from './Icon';
import { BoldCardTitle } from './Title';

export * from './Root';
export * from './Icon';
export * from './Title';

export default Object.assign(BoldCard, {
  Icon: BoldCardIcon,
  Title: BoldCardTitle
});
