import MenubarCheckboxItem from './CheckboxItem';
import MenubarContent from './Content';
import MenubarGroup from './Group';
import MenubarIcon from './Icon';
import MenubarItem from './Item';
import MenubarItemIndicator from './ItemIndicator';
import MenubarLabel from './Label';
import MenubarMenu from './Menu';
import MenubarPortal from './Portal';
import MenubarRadioGroup from './RadioGroup';
import MenubarRadioItem from './RadioItem';
import MenubarRoot from './Root';
import MenubarSeparator from './Separator';
import MenubarShortcut from './Shortcut';
import MenubarTrigger from './Trigger';
import MenubarSub from './sub';

const Menubar = MenubarRoot;

Menubar.CheckboxItem = MenubarCheckboxItem;
Menubar.Content = MenubarContent;
Menubar.Group = MenubarGroup;
Menubar.Icon = MenubarIcon;
Menubar.Item = MenubarItem;
Menubar.ItemIndicator = MenubarItemIndicator;
Menubar.Label = MenubarLabel;
Menubar.Menu = MenubarMenu;
Menubar.Portal = MenubarPortal;
Menubar.RadioGroup = MenubarRadioGroup;
Menubar.RadioItem = MenubarRadioItem;
Menubar.Separator = MenubarSeparator;
Menubar.Shortcut = MenubarShortcut;
Menubar.Trigger = MenubarTrigger;
Menubar.Sub = MenubarSub;

export default Menubar;
export {
  MenubarRoot as Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarIcon,
  MenubarItem,
  MenubarItemIndicator,
  MenubarLabel,
  MenubarMenu,
  MenubarPortal,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
  MenubarSub,
};
