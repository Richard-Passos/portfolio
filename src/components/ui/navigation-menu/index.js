import NavigationMenuContent from './Content';
import NavigationMenuItem from './Item';
import NavigationMenuLink from './Link';
import NavigationMenuList from './List';
import NavigationMenuRoot from './Root';
import NavigationMenuTrigger from './Trigger';
import NavigationMenuViewport from './Viewport';

const NavigationMenu = NavigationMenuRoot;

NavigationMenu.Content = NavigationMenuContent;
NavigationMenu.Item = NavigationMenuItem;
NavigationMenu.Link = NavigationMenuLink;
NavigationMenu.List = NavigationMenuList;
NavigationMenu.Trigger = NavigationMenuTrigger;
NavigationMenu.Viewport = NavigationMenuViewport;

export default NavigationMenu;
export {
  NavigationMenuRoot as NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
};
