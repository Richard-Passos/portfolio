import AccordionContent from './Content';
import AccordionHeader from './Header';
import AccordionItem from './Item';
import AccordionRoot from './Root';
import AccordionTrigger from './Trigger';

const Accordion = AccordionRoot;

Accordion.Content = AccordionContent;
Accordion.Header = AccordionHeader;
Accordion.Item = AccordionItem;
Accordion.Trigger = AccordionTrigger;

export default Accordion;
export {
  AccordionRoot as Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionTrigger,
};
