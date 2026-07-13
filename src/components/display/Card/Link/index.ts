import { LinkCard } from './Root';
import { LinkCardIcon } from './Icon';
import { LinkCardText } from './Text';
import { LinkCardTitle } from './Title';

export * from './Root';
export * from './Icon';
export * from './Title';

export default Object.assign(LinkCard, {
  Icon: LinkCardIcon,
  Text: LinkCardText,
  Title: LinkCardTitle
});
