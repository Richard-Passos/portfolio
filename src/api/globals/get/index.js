import globalsApiGetOne from './one';
import globalsApiGetRoot from './root';

const globalsApiGet = {
  getOne: globalsApiGetOne,
  get: globalsApiGetRoot,
};

export default globalsApiGet;
export { globalsApiGetRoot as globalsApiGet, globalsApiGetOne };
