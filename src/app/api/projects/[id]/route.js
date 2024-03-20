import { projects } from '@/constants';

const GET = async (_, { params: { id } }) => {
  id = id?.toLowerCase()

  const data = projects.find(({slug}) => slug === id?.replace(/[_ ]/g, '-'))

  return Response.json({
    status: 200,
    data
  });
};

export { GET };
