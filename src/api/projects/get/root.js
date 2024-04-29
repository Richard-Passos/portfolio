import { getData } from '@/utils';

const projectsApiGet = async (pathname = '', opts = {}) =>
  await getData(`/projects${pathname}`, opts);

export default projectsApiGet;
