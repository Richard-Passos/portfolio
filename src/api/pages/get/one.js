import { getData } from '@/utils';

const pagesApiGetOne = async (id = '', pathname = '', opts = {}) =>
  await getData(`/pages/${id}${pathname}`, opts);

export default pagesApiGetOne;
