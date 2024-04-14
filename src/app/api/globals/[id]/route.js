import { globals } from '@/constants';
import { normId } from '@/utils';

const GET = async (_, { params: { id = '' } }) => {
  id = normId(id)

  const data = globals.find(({ slug }) => normId(slug) === id);

  return Response.json({
    status: 200,
    data,
  });
};

export { GET };
