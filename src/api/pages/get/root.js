import { getData } from '@/utils';

const pagesApiGet = async (pathname = '', opts = {}) =>
  await getData(`/pages${pathname}`, opts);

export default pagesApiGet;
