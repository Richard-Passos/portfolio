import { AccordionContent } from './Content';
import { AccordionItem } from './Item';
import { Accordion } from './Root';
import { AccordionTrigger } from './Trigger';

export * from './Content';
export * from './Item';
export * from './Root';
export * from './Trigger';

export default Object.assign(Accordion, {
  Content: AccordionContent,
  Item: AccordionItem,
  Trigger: AccordionTrigger
});
