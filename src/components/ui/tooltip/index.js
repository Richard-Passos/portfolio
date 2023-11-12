import TooltipContent from './Content';
import TooltipPortal from './Portal';
import TooltipProvider from './Provider';
import TooltipRoot from './Root';
import TooltipTrigger from './Trigger';

const Tooltip = TooltipRoot;

Tooltip.Content = TooltipContent;
Tooltip.Portal = TooltipPortal;
Tooltip.Provider = TooltipProvider;
Tooltip.Trigger = TooltipTrigger;

export default Tooltip;
export {
  TooltipRoot as Tooltip,
  TooltipContent,
  TooltipPortal,
  TooltipProvider,
  TooltipTrigger,
};
