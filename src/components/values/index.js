import ValuesDescription from './Description';
import ValuesIcon from './Icon';
import ValuesItem from './Item';
import ValuesRoot from './Root';
import ValuesTitle from './Title';

const Values = ValuesRoot;

Values.Description = ValuesDescription;
Values.Icon = ValuesIcon;
Values.Item = ValuesItem;
Values.Title = ValuesTitle;

export default Values;
export {
  ValuesRoot as Values,
  ValuesDescription,
  ValuesIcon,
  ValuesItem,
  ValuesTitle,
};
