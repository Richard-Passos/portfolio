import { getData } from '@/utils';

const projectsApiGetSelecteds = async (pathname = '', opts = {}) => {
  const res = await getData(`/projects${pathname}`, opts)

  if (res) res.data = res.data.filter((data) => data.isSelected);

  return res;
};

export default projectsApiGetSelecteds;
