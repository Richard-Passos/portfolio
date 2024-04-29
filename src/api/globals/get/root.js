import { getData } from '@/utils';

const globalsApiGet = async (pathname = '', opts = {}) =>
  await getData(`/globals${pathname}`, opts);

export default globalsApiGet;
