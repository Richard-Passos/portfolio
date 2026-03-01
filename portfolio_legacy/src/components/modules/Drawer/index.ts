import { DrawerContent } from './Content';
import { DrawerRoot } from './Root';
import { DrawerTrigger } from './Trigger';

export * from './Content';
export * from './Root';
export * from './Trigger';

const Drawer = Object.assign(DrawerRoot, {
  Content: DrawerContent,
  Trigger: DrawerTrigger
});

export { Drawer };
