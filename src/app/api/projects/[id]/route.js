import { getConstants, normId } from '@/utils';

const GET = async (req, { params: { id } }) => {
  id = normId(id);

  const { searchParams } = req.nextUrl;

  const { projects = [] } = getConstants(searchParams.get('locale'));

  const dataIdx = projects.findIndex(({ slug }) => normId(slug) === id);

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
