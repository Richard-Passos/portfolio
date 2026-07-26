import { Tooltip } from './Root';
import { TooltipArrow } from './Arrow';
import { TooltipContent } from './Content';
import { TooltipTrigger } from './Trigger';

export * from './Root';
export * from './Arrow';
export * from './Content';
export * from './Trigger';

export default Object.assign(Tooltip, {
  Arrow: TooltipArrow,
  Content: TooltipContent,
  Trigger: TooltipTrigger
});
