import { baseUrl } from '@/constants';

const getProjects = async (params = '', init = {}) => {
  const res = await fetch(
    `${baseUrl}/api/projects${params ? '?' + params : ''}`,
    { cache: 'no-cache' },
  );

  const { data } = await res.json();

  return data;
};

export default getProjects;
