import { AccordionContent } from './Content';
import { AccordionIndicator } from './Indicator';
import { AccordionItem } from './Item';
import { Accordion } from './Root';
import { AccordionTrigger } from './Trigger';

export * from './Content';
export * from './Indicator';
export * from './Item';
export * from './Root';
export * from './Trigger';

export default Object.assign(Accordion, {
  Content: AccordionContent,
  Indicator: AccordionIndicator,
  Item: AccordionItem,
  Trigger: AccordionTrigger
});
