import SheetAction from './Action';
import SheetActions from './Actions';
import SheetClose from './Close';
import SheetContent from './Content';
import SheetDescription from './Description';
import SheetHeader from './Header';
import SheetOverlay from './Overlay';
import SheetPortal from './Portal';
import SheetRoot from './Root';
import SheetTitle from './Title';
import SheetTrigger from './Trigger';

const Sheet = SheetRoot;

Sheet.Action = SheetAction;
Sheet.Actions = SheetActions;
Sheet.Close = SheetClose;
Sheet.Content = SheetContent;
Sheet.Description = SheetDescription;
Sheet.Header = SheetHeader;
Sheet.Overlay = SheetOverlay;
Sheet.Portal = SheetPortal;
Sheet.Title = SheetTitle;
Sheet.Trigger = SheetTrigger;

export default Sheet;
export {
  SheetRoot as Sheet,
  SheetAction,
  SheetActions,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetOverlay,
  SheetPortal,
  SheetTitle,
  SheetTrigger,
};
