import DialogAction from './Action';
import DialogActions from './Actions';
import DialogClose from './Close';
import DialogContent from './Content';
import DialogDescription from './Description';
import DialogHeader from './Header';
import DialogOverlay from './Overlay';
import DialogPortal from './Portal';
import DialogRoot from './Root';
import DialogTitle from './Title';
import DialogTrigger from './Trigger';

const Dialog = DialogRoot;

Dialog.Action = DialogAction;
Dialog.Actions = DialogActions;
Dialog.Close = DialogClose;
Dialog.Content = DialogContent;
Dialog.Description = DialogDescription;
Dialog.Header = DialogHeader;
Dialog.Overlay = DialogOverlay;
Dialog.Portal = DialogPortal;
Dialog.Title = DialogTitle;
Dialog.Trigger = DialogTrigger;

export default Dialog;
export {
  DialogRoot as Dialog,
  DialogAction,
  DialogActions,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
};
