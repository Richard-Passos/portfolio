import ItemRoot from './Root';
import ItemBold from './Bold';
import ItemDescription from './Description';
import ItemInfinityScroll from './InfinityScroll';
import ItemLink from './Link';
import ItemLocalTime from './LocalTime';
import ItemSimple from './Simple';

const Item = ItemRoot

Item.Bold = ItemBold;
Item.Description = ItemDescription;
Item.InfinityScroll = ItemInfinityScroll;
Item.Link = ItemLink;
Item.LocalTime = ItemLocalTime;
Item.Simple = ItemSimple;

export default Item;
export {
ItemRoot as Item,
ItemBold,
ItemDescription,
ItemInfinityScroll,
ItemLink,
ItemLocalTime,
ItemSimple,
}