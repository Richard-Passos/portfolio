import { AdjacentProjects } from './Root';
import { AdjacentProjectsNext } from './Next';
import { AdjacentProjectsPrev } from './Prev';

export * from './Root';
export * from './Next';
export * from './Prev';

export default Object.assign(AdjacentProjects, {
  Next: AdjacentProjectsNext,
  Prev: AdjacentProjectsPrev
});
