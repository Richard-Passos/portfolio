import MenuClose from './Close';
import MenuContent from './Content';
import MenuOverlay from './Overlay';
import MenuRoot from './Root';
import MenuTrigger from './Trigger';

const Menu = MenuRoot;

Menu.Close = MenuClose;
Menu.Content = MenuContent;
Menu.Overlay = MenuOverlay;
Menu.Trigger = MenuTrigger;

export default Menu;
export { MenuRoot as Menu, MenuClose, MenuContent, MenuOverlay, MenuTrigger };
