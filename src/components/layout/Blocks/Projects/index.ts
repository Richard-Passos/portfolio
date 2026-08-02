import { Projects } from './Root';
import { ProjectsCatalog } from './Catalog';
import { ProjectsTitle } from './Title';

export * from './Root';
export * from './Catalog';
export * from './Title';

export default Object.assign(Projects, {
  Catalog: ProjectsCatalog,
  Title: ProjectsTitle
});
