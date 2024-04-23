import { getConstants, normId } from '@/utils';

const GET = async (req, { params: { id } }) => {
  id = normId(id);

  const { searchParams } = req.nextUrl;
  
  const { globals } = getConstants(searchParams.get('lang'))

  const data = globals.find(({ slug }) => normId(slug) === id);

  return Response.json({
    status: 200,
    data,
  });
};

export { GET };
