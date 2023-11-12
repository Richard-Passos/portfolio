import CheckboxIndicator from './Indicator';
import CheckboxRoot from './Root';

const Checkbox = CheckboxRoot;

Checkbox.Indicator = CheckboxIndicator;

export default Checkbox;
export { CheckboxRoot as Checkbox, CheckboxIndicator };
