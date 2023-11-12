import ContextMenuCheckboxItem from './CheckboxItem';
import ContextMenuContent from './Content';
import ContextMenuGroup from './Group';
import ContextMenuIcon from './Icon';
import ContextMenuItem from './Item';
import ContextMenuItemIndicator from './ItemIndicator';
import ContextMenuLabel from './Label';
import ContextMenuPortal from './Portal';
import ContextMenuRadioGroup from './RadioGroup';
import ContextMenuRadioItem from './RadioItem';
import ContextMenuRoot from './Root';
import ContextMenuSeparator from './Separator';
import ContextMenuShortcut from './Shortcut';
import ContextMenuTrigger from './Trigger';
import ContextMenuSub from './sub';

const ContextMenu = ContextMenuRoot;

ContextMenu.CheckboxItem = ContextMenuCheckboxItem;
ContextMenu.Content = ContextMenuContent;
ContextMenu.Group = ContextMenuGroup;
ContextMenu.Icon = ContextMenuIcon;
ContextMenu.Item = ContextMenuItem;
ContextMenu.ItemIndicator = ContextMenuItemIndicator;
ContextMenu.Label = ContextMenuLabel;
ContextMenu.Portal = ContextMenuPortal;
ContextMenu.RadioGroup = ContextMenuRadioGroup;
ContextMenu.RadioItem = ContextMenuRadioItem;
ContextMenu.Separator = ContextMenuSeparator;
ContextMenu.Shortcut = ContextMenuShortcut;
ContextMenu.Trigger = ContextMenuTrigger;
ContextMenu.Sub = ContextMenuSub;

export default ContextMenu;
export {
  ContextMenuRoot as ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuIcon,
  ContextMenuItem,
  ContextMenuItemIndicator,
  ContextMenuLabel,
  ContextMenuPortal,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
  ContextMenuSub,
};
