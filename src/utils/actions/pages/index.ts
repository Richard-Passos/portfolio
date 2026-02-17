import pagesApiGet from './get';
import pagesApiGetOne from './getOne';
import pagesApiGetProject from './getProject';

const pagesApi = {
  get: pagesApiGet,
  getOne: pagesApiGetOne,
  getProject: pagesApiGetProject
};

export default pagesApi;
export { pagesApiGet, pagesApiGetOne, pagesApiGetProject };
