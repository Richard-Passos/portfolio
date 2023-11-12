import HoverCardContent from './Content';
import HoverCardRoot from './Root';
import HoverCardTrigger from './Trigger';

const HoverCard = HoverCardRoot;

HoverCard.Content = HoverCardContent;
HoverCard.Trigger = HoverCardTrigger;

export default HoverCard;
export { HoverCardRoot as HoverCard, HoverCardContent, HoverCardTrigger };
