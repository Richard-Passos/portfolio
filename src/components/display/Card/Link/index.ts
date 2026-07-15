import { LinkCard } from './Root';
import { LinkCardIcon } from './Icon';
import { LinkCardTitle } from './Title';
import { LinkCardUrl } from './Url';

export * from './Root';
export * from './Icon';
export * from './Title';
export * from './Url';

export default Object.assign(LinkCard, {
  Icon: LinkCardIcon,
  Title: LinkCardTitle,
  Url: LinkCardUrl
});
