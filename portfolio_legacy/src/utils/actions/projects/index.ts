import { projectsApiGet } from './get';
import projectsApiGetOne from './getOne';

const projectsApi = {
  get: projectsApiGet,
  getOne: projectsApiGetOne
};

export * from './get';

export { projectsApi };
