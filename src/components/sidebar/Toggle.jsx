import { Toggle as CompToggle } from '../toggle';
import { STATE_ID } from './Root';

const Toggle = ({ ...props }) => {
  return (
    <CompToggle
      htmlFor={STATE_ID}
      {...props}
    />
  );
};

export default Toggle;
