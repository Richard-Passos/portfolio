import { pages } from '@/constants';

const GET = async (_, { params: { id } }) => {
  id = id?.toLowerCase();

  const data = pages.find(({ slug }) => slug === id?.replace(/[_ ]/g, '-'));

  return Response.json({
    status: 200,
    data,
  });
};

export { GET };
