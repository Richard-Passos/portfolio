import { baseUrl } from '@/constants';

const getProjects = async (params = '', init = {}) => {
  const res = await fetch(`${baseUrl}/api/projects?${params}`, {
    'Content-Type': 'application/json',
    ...init,
  });

  const data = await res.json();

  return data;
};

export default getProjects;
