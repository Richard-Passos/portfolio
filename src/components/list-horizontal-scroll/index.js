import ListHorizontalScrollItem from './Item';
import ListHorizontalScrollLink from './Link';
import ListHorizontalScrollRoot from './Root';

const ListHorizontalScroll = ListHorizontalScrollRoot;

ListHorizontalScroll.Item = ListHorizontalScrollItem;
ListHorizontalScroll.Link = ListHorizontalScrollLink;

export default ListHorizontalScroll;
export {
  ListHorizontalScrollRoot as ListHorizontalScroll,
  ListHorizontalScrollItem,
  ListHorizontalScrollLink,
};
