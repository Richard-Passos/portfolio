import { CatalogEmpty } from './Empty';
import { CatalogList } from './List';
import { Catalog } from './Root';

export * from './Empty';
export * from './List';
export * from './Root';

export default Object.assign(Catalog, {
  Empty: CatalogEmpty,
  List: CatalogList
});
