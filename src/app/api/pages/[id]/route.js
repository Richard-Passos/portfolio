import { pages } from '@/constants';
import { normId } from '@/utils';

const GET = async (_, { params: { id = '' } }) => {
  id = normId(id);

  const data = pages.find(({ slug }) => normId(slug) === id);

  return Response.json({
    status: 200,
    data,
  });
};

export { GET };
