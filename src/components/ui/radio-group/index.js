import RadioGroupIndicator from './Indicator';
import RadioGroupItem from './Item';
import RadioGroupRoot from './Root';

const RadioGroup = RadioGroupRoot;

RadioGroup.Indicator = RadioGroupIndicator;
RadioGroup.Item = RadioGroupItem;

export default RadioGroup;
export { RadioGroupRoot as RadioGroup, RadioGroupIndicator, RadioGroupItem };
