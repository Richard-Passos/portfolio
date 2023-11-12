import SelectItemIndicator from './Indicator';
import SelectItemRoot from './Root';
import SelectItemText from './Text';

const SelectItem = SelectItemRoot;

SelectItem.Indicator = SelectItemIndicator;
SelectItem.Text = SelectItemText;

export default SelectItem;
export { SelectItemRoot as SelectItem, SelectItemIndicator, SelectItemText };
