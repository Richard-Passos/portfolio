import ContextMenuSubContent from './Content';
import ContextMenuSubRoot from './Root';
import ContextMenuSubTrigger from './Trigger';

const ContextMenuSub = ContextMenuSubRoot;

ContextMenuSub.Content = ContextMenuSubContent;
ContextMenuSub.Trigger = ContextMenuSubTrigger;

export default ContextMenuSub;
export {
  ContextMenuSubRoot as ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
};
