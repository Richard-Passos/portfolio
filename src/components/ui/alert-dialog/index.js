import AlertDialogAction from './Action';
import AlertDialogActions from './Actions';
import AlertDialogCancel from './Cancel';
import AlertDialogContent from './Content';
import AlertDialogDescription from './Description';
import AlertDialogHeader from './Header';
import AlertDialogOverlay from './Overlay';
import AlertDialogPortal from './Portal';
import AlertDialogRoot from './Root';
import AlertDialogTitle from './Title';
import AlertDialogTrigger from './Trigger';

const AlertDialog = AlertDialogRoot;

AlertDialog.Action = AlertDialogAction;
AlertDialog.Actions = AlertDialogActions;
AlertDialog.Cancel = AlertDialogCancel;
AlertDialog.Content = AlertDialogContent;
AlertDialog.Description = AlertDialogDescription;
AlertDialog.Header = AlertDialogHeader;
AlertDialog.Overlay = AlertDialogOverlay;
AlertDialog.Portal = AlertDialogPortal;
AlertDialog.Title = AlertDialogTitle;
AlertDialog.Trigger = AlertDialogTrigger;

export default AlertDialog;
export {
  AlertDialogRoot as AlertDialog,
  AlertDialogAction,
  AlertDialogActions,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
};
