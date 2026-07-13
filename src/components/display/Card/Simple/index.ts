import { SimpleCard } from './Root';
import { SimpleCardIcon } from './Icon';
import { SimpleCardText } from './Text';

export * from './Root';
export * from './Icon';
export * from './Text';

export default Object.assign(SimpleCard, {
  Icon: SimpleCardIcon,
  Text: SimpleCardText
});
