import { GradientCardIcon } from './Icon';
import { GradientCard } from './Root';
import { GradientCardText } from './Text';
import { GradientCardTitle } from './Title';

export * from './Icon';
export * from './Root';
export * from './Text';
export * from './Title';

export default Object.assign(GradientCard, {
  Icon: GradientCardIcon,
  Text: GradientCardText,
  Title: GradientCardTitle
});
