import { DescriptionCard } from './Root';
import { DescriptionCardBadge } from './Badge';
import { DescriptionCardText } from './Text';

export * from './Root';
export * from './Badge';
export * from './Text';

export default Object.assign(DescriptionCard, {
  Badge: DescriptionCardBadge,
  Text: DescriptionCardText
});
