import SelectContent from './Content';
import SelectGroup from './Group';
import SelectIcon from './Icon';
import SelectLabel from './Label';
import SelectPortal from './Portal';
import SelectRoot from './Root';
import SelectSeparator from './Separator';
import SelectTrigger from './Trigger';
import SelectValue from './Value';
import SelectViewport from './Viewport';
import SelectItem from './item';
import SelectScrollButton from './scroll-button';

const Select = SelectRoot;

Select.Content = SelectContent;
Select.Group = SelectGroup;
Select.Icon = SelectIcon;
Select.Label = SelectLabel;
Select.Portal = SelectPortal;
Select.Separator = SelectSeparator;
Select.Trigger = SelectTrigger;
Select.Value = SelectValue;
Select.Viewport = SelectViewport;
Select.Item = SelectItem;
Select.ScrollButton = SelectScrollButton;

export default Select;
export {
  SelectRoot as Select,
  SelectContent,
  SelectGroup,
  SelectIcon,
  SelectLabel,
  SelectPortal,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  SelectViewport,
  SelectItem,
  SelectScrollButton,
};
