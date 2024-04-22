import ItemBold from './Bold';
import ItemDataChanger from './DataChanger';
import ItemDescription from './Description';
import ItemHorizontalScroll from './HorizontalScroll';
import ItemIcons from './Icons';
import ItemImage from './Image';
import ItemIndicator from './Indicator';
import ItemInfinityScroll from './InfinityScroll';
import ItemLink from './Link';
import ItemLocalTime from './LocalTime';
import ItemRoot from './Root';
import ItemSimple from './Simple';
import ItemValue from './Value';

const Item = ItemRoot;

Item.Bold = ItemBold;
Item.DataChanger = ItemDataChanger;
Item.Description = ItemDescription;
Item.HorizontalScroll = ItemHorizontalScroll;
Item.Icons = ItemIcons;
Item.Image = ItemImage;
Item.Indicator = ItemIndicator;
Item.InfinityScroll = ItemInfinityScroll;
Item.Link = ItemLink;
Item.LocalTime = ItemLocalTime;
Item.Simple = ItemSimple;
Item.Value = ItemValue;

export default Item;
export {
  ItemRoot as Item,
  ItemBold,
  ItemDataChanger,
  ItemDescription,
  ItemHorizontalScroll,
  ItemIcons,
  ItemImage,
  ItemIndicator,
  ItemInfinityScroll,
  ItemLink,
  ItemLocalTime,
  ItemSimple,
  ItemValue,
};
