import { baseUrl } from '@/constants';

const getProjects = async (params = '', init = {}) => {
  const res = await fetch(`${baseUrl}/api/projects?${params}`, init);

  const data = await res.json();
  console.log('-  data   -', data);

  return data;
};

export default getProjects;
