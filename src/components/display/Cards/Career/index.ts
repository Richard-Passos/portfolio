import { CareerCardBadge } from './Badge';
import { CareerCardExtra } from './Extra';
import { CareerCardHeader } from './Header';
import { CareerCard } from './Root';
import { CareerCardText } from './Text';
import { CareerCardTitle } from './Title';
import { CareerCardTrigger } from './Trigger';

export * from './Badge';
export * from './Extra';
export * from './Header';
export * from './Root';
export * from './Text';
export * from './Title';
export * from './Trigger';

export default Object.assign(CareerCard, {
  Badge: CareerCardBadge,
  Extra: CareerCardExtra,
  Header: CareerCardHeader,
  Text: CareerCardText,
  Title: CareerCardTitle,
  Trigger: CareerCardTrigger
});
