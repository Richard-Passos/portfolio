import { TimeCard } from './Root';
import { TimeCardText } from './Text';
import { TimeCardTitle } from './Title';

export * from './Root';
export * from './Text';
export * from './Title';

export default Object.assign(TimeCard, {
  Text: TimeCardText,
  Title: TimeCardTitle
});
