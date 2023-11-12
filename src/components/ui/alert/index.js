import AlertDescription from './Description';
import AlertIcon from './Icon';
import AlertRoot, { alertStyles, alertVariants } from './Root';
import AlertTitle from './Title';

const Alert = AlertRoot;

Alert.Description = AlertDescription;
Alert.Icon = AlertIcon;
Alert.Title = AlertTitle;

export default Alert;
export {
  AlertRoot as Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  alertStyles,
  alertVariants,
};
