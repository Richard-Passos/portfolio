import { SpinCard } from './Root';
import { SpinCardBack } from './Back';
import { SpinCardBorder } from './Border';
import { SpinCardContent } from './Content';
import { SpinCardFront } from './Front';
import { SpinCardGroup } from './Group';
import { SpinCardIcon } from './Icon';
import { SpinCardTitle } from './Title';

export * from './Root';
export * from './Back';
export * from './Border';
export * from './Content';
export * from './Front';
export * from './Group';
export * from './Icon';
export * from './Title';

export default Object.assign(SpinCard, {
  Back: SpinCardBack,
  Border: SpinCardBorder,
  Content: SpinCardContent,
  Front: SpinCardFront,
  Group: SpinCardGroup,
  Icon: SpinCardIcon,
  Title: SpinCardTitle
});
