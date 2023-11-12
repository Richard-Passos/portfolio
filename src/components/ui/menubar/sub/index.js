import MenubarSubContent from './Content';
import MenubarSubRoot from './Root';
import MenubarSubTrigger from './Trigger';

const MenubarSub = MenubarSubRoot;

MenubarSub.Content = MenubarSubContent;
MenubarSub.Trigger = MenubarSubTrigger;

export default MenubarSub;
export { MenubarSubRoot as MenubarSub, MenubarSubContent, MenubarSubTrigger };
