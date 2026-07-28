import { MenuDrawer } from './Root';
import { MenuDrawerContent } from './Content';
import { MenuDrawerTrigger } from './Trigger';
import { MenuDrawerScrollTrigger } from './ScrollTrigger';

export * from './Root';
export * from './Content';
export * from './Trigger';
export * from './ScrollTrigger';

export default Object.assign(MenuDrawer, {
  Content: MenuDrawerContent,
  Trigger: MenuDrawerTrigger,
  ScrollTrigger: MenuDrawerScrollTrigger
});
