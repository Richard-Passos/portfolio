import { pagesApiGet } from './get';
import { pagesApiGetOne } from './getOne';
import { pagesApiGetProject } from './getProject';

export * from './get';
export * from './getOne';
export * from './getProject';

const pagesApi = {
  get: pagesApiGet,
  getOne: pagesApiGetOne,
  getProject: pagesApiGetProject
};

export { pagesApi };
