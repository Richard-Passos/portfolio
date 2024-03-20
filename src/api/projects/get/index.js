import projectsApiGetOne from './one';
import projectsApiGetRoot from './root';
import projectsApiGetSelecteds from './selecteds';

const projectsApiGet = {
  get: projectsApiGetRoot,
  getOne: projectsApiGetOne,
  getSelecteds: projectsApiGetSelecteds,
};

export default projectsApiGet;
export {
  projectsApiGetRoot as projectsApiGet,
  projectsApiGetOne,
  projectsApiGetSelecteds,
};
