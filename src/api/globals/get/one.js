import { getData } from '@/utils';

const globalsApiGetOne = async (id = '', pathname = '', opts = {}) => await getData(`/globals/${id}${pathname}`, opts)

export default globalsApiGetOne;
