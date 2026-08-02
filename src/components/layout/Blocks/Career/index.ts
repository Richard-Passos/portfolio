import { Career } from './Root';
import { CareerCatalog } from './Catalog';
import { CareerTitle } from './Title';

export * from './Root';
export * from './Catalog';
export * from './Title';

export default Object.assign(Career, {
  Catalog: CareerCatalog,
  Title: CareerTitle
});
