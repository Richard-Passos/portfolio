import ListHorizontalScrollItem from './Item';
import ListHorizontalScrollRoot from './Root';

const ListHorizontalScroll = ListHorizontalScrollRoot;

ListHorizontalScroll.Item = ListHorizontalScrollItem;

export default ListHorizontalScroll;
export {
  ListHorizontalScrollRoot as ListHorizontalScroll,
  ListHorizontalScrollItem,
};
