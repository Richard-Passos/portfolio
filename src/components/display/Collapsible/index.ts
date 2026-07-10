import { CollapsibleContent } from './Content';
import { CollapsibleIndicator } from './Indicator';
import { Collapsible } from './Root';
import { CollapsibleTrigger } from './Trigger';

export * from './Content';
export * from './Indicator';
export * from './Root';
export * from './Trigger';

export default Object.assign(Collapsible, {
  Content: CollapsibleContent,
  Indicator: CollapsibleIndicator,
  Trigger: CollapsibleTrigger
});
