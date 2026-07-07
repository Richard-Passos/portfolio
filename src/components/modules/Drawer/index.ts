import { DrawerBackdrop } from './Backdrop';
import { DrawerClose } from './Close';
import { DrawerContent } from './Content';
import { DrawerDescription } from './Description';
import { DrawerGrabber } from './Grabber';
import { DrawerPositioner } from './Positioner';
import { Drawer } from './Root';
import { DrawerTitle } from './Title';
import { DrawerTrigger } from './Trigger';

export * from './Backdrop';
export * from './Close';
export * from './Content';
export * from './Description';
export * from './Grabber';
export * from './Positioner';
export * from './Root';
export * from './Title';
export * from './Trigger';

export default Object.assign(Drawer, {
  Backdrop: DrawerBackdrop,
  Close: DrawerClose,
  Content: DrawerContent,
  Description: DrawerDescription,
  Grabber: DrawerGrabber,
  Positioner: DrawerPositioner,
  Title: DrawerTitle,
  Trigger: DrawerTrigger,
});
