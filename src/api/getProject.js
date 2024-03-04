import { baseUrl } from '@/constants';

const getProject = (id, init) => {
  const data = _fetch(`/${id}`, init),
    images = _fetch(`/${id}/images`, init);

  return { data, images };
};

const _fetch = async (pathname, init) => {};

export default getProject;
