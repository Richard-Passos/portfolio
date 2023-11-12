import DropdownMenuSubContent from './Content';
import DropdownMenuSubRoot from './Root';
import DropdownMenuSubTrigger from './Trigger';

const DropdownMenuSub = DropdownMenuSubRoot;

DropdownMenuSub.Content = DropdownMenuSubContent;
DropdownMenuSub.Trigger = DropdownMenuSubTrigger;

export default DropdownMenuSub;
export {
  DropdownMenuSubRoot as DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
};
