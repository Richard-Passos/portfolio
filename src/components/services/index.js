import ServicesDescription from './Description';
import ServicesItem from './Item';
import ServicesNumber from './Number';
import ServicesRoot from './Root';
import ServicesTitle from './Title';

const Services = ServicesRoot;

Services.Description = ServicesDescription;
Services.Item = ServicesItem;
Services.Number = ServicesNumber;
Services.Title = ServicesTitle;

export default Services;
export {
  ServicesRoot as Services,
  ServicesDescription,
  ServicesItem,
  ServicesNumber,
  ServicesTitle,
};
