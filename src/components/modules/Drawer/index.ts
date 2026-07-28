import { DrawerBackdrop } from './Backdrop';
import { DrawerContent } from './Content';
import { DrawerDescription } from './Description';
import { Drawer } from './Root';
import { DrawerTitle } from './Title';
import { DrawerTrigger } from './Trigger';

export * from './Backdrop';
export * from './Content';
export * from './Description';
export * from './Root';
export * from './Title';
export * from './Trigger';

export default Object.assign(Drawer, {
  Backdrop: DrawerBackdrop,
  Content: DrawerContent,
  Description: DrawerDescription,
  Title: DrawerTitle,
  Trigger: DrawerTrigger
});
