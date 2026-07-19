import { SpinCard } from './Root';
import { SpinCardBack } from './Back';
import { SpinCardFront } from './Front';
import { SpinCardIcon } from './Icon';
import { SpinCardTitle } from './Title';

export * from './Root';
export * from './Back';
export * from './Front';
export * from './Icon';
export * from './Title';

export default Object.assign(SpinCard, {
  Back: SpinCardBack,
  Front: SpinCardFront,
  Icon: SpinCardIcon,
  Title: SpinCardTitle
});
