import { projects } from '@/constants';

const GET = async (_, { params: { id = '' } }) => {
  id = id.toLowerCase();

  const dataIdx = projects.findIndex(
    ({ slug }) => slug === id.replace(/[_ ]/g, '-'),
  );

  const data = projects[dataIdx],
    adjacentIds = {
      prev: projects.at(dataIdx > 0 ? dataIdx - 1 : projects.length - 1)?.slug,
      next: projects.at(dataIdx < projects.length - 1 ? dataIdx + 1 : 0)?.slug,
    };

  return Response.json({
    status: 200,
    data,
    meta: { adjacentIds },
  });
};

export { GET };
