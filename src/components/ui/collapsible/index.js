import CollapsibleContent from './Content';
import CollapsibleRoot from './Root';
import CollapsibleTrigger from './Trigger';

const Collapsible = CollapsibleRoot;

Collapsible.Content = CollapsibleContent;
Collapsible.Trigger = CollapsibleTrigger;

export default Collapsible;
export {
  CollapsibleRoot as Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
};
