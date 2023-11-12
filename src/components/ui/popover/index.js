import PopoverClose from './Close';
import PopoverContent from './Content';
import PopoverPortal from './Portal';
import PopoverRoot from './Root';
import PopoverTrigger from './Trigger';

const Popover = PopoverRoot;

Popover.Close = PopoverClose;
Popover.Content = PopoverContent;
Popover.Portal = PopoverPortal;
Popover.Trigger = PopoverTrigger;

export default Popover;
export {
  PopoverRoot as Popover,
  PopoverClose,
  PopoverContent,
  PopoverPortal,
  PopoverTrigger,
};
