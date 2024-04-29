import { getData } from '@/utils';

const projectsApiGetOne = async (id = '', pathname = '', opts = {}) => await getData(`/projects/${id}${pathname}`, opts)

export default projectsApiGetOne;
