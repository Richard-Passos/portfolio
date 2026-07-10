import { CatalogEmpty } from './Empty';
import { CatalogFilter } from './Filter';
import { CatalogLastPage } from './LastPage';
import { CatalogList } from './List';
import { CatalogLoadMore } from './LoadMore';
import { Catalog } from './Root';

export * from './Empty';
export * from './Filter';
export * from './LastPage';
export * from './List';
export * from './LoadMore';
export * from './Root';

export default Object.assign(Catalog, {
  Empty: CatalogEmpty,
  Filter: CatalogFilter,
  LastPage: CatalogLastPage,
  List: CatalogList,
  LoadMore: CatalogLoadMore
});
