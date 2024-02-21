import ButtonIcon from './Icon';
import MagneticButton from './Magnetic';
import ButtonRoot from './Root';

const Button = ButtonRoot;

Button.Icon = ButtonIcon;
Button.Magnetic = MagneticButton;

export default Button;
export { ButtonRoot as Button, ButtonIcon, MagneticButton };
