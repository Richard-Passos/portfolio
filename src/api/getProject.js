import { baseUrl } from '@/constants';

const getProject = (id, init) => {
  const data = _fetch(`/${id}`, init),
    images = _fetch(`/${id}/images`, init);

  return { data, images };
};

const _fetch = async (pathname, init) => {
  const res = await fetch(`${baseUrl}/api/projects${pathname}`, {
    cache: 'no-store',
  });

  const { data } = await res.json();

  return data;
};

export default getProject;
