import projectsApiGet from './get';
import projectsApiGetOne from './getOne';

const projectsApi = {
  get: projectsApiGet,
  getOne: projectsApiGetOne
};

export default projectsApi;
export { projectsApiGet, projectsApiGetOne };
