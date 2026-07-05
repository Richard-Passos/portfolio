import { CatalogEmpty } from './Empty';
import { CatalogFilter } from './Filter';
import { CatalogLastPage } from './LastPage';
import { CatalogList } from './List';
import { CatalogLoadMore } from './LoadMore';
import { CatalogRoot } from './Root';

export * from './Empty';
export * from './Filter';
export * from './LastPage';
export * from './List';
export * from './LoadMore';
export * from './Root';

const Catalog = Object.assign(CatalogRoot, {
  Empty: CatalogEmpty,
  Filter: CatalogFilter,
  LastPage: CatalogLastPage,
  List: CatalogList,
  LoadMore: CatalogLoadMore
});

export { Catalog };
