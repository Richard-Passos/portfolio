import CardRoot, { CardAtomProps as CardRootProps } from './Root';
import CardSection, { CardSectionProps } from './Section';

const Card = {
  Root: CardRoot,
  Section: CardSection
};

export default Card;
export { CardRoot, CardSection };
export type { CardRootProps, CardSectionProps };
