import { CardRoot } from './Root';
import { CardSection } from './Section';

export * from './Root';
export * from './Section';

const Card = Object.assign(CardRoot, {
  Section: CardSection
});

export { Card };
