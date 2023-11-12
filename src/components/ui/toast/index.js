import ToastAction from './Action';
import ToastClose from './Close';
import ToastDescription from './Description';
import ToastHeader from './Header';
import ToastIcon from './Icon';
import ToastProvider from './Provider';
import ToastRoot, { toastStyles, toastVariants } from './Root';
import ToastTitle from './Title';
import ToastViewport from './Viewport';

const Toast = ToastRoot;

Toast.Action = ToastAction;
Toast.Close = ToastClose;
Toast.Description = ToastDescription;
Toast.Header = ToastHeader;
Toast.Icon = ToastIcon;
Toast.Provider = ToastProvider;
Toast.Title = ToastTitle;
Toast.Viewport = ToastViewport;

export default Toast;
export {
  ToastRoot as Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastHeader,
  ToastIcon,
  ToastProvider,
  ToastTitle,
  ToastViewport,
  toastStyles,
  toastVariants,
};
