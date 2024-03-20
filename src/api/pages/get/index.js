import pagesApiGetOne from './one';
import pagesApiGetRoot from './root';

const pagesApiGet = {
  get: pagesApiGetRoot,
  getOne: pagesApiGetOne,
};

export default pagesApiGet;
export { pagesApiGetRoot as pagesApiGet, pagesApiGetOne };
