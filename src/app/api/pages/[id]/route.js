import { getConstants, normId } from '@/utils';

const GET = async (req, { params: { id } }) => {
  id = normId(id);

  const { searchParams } = req.nextUrl;

  const { pages = [] } = getConstants(searchParams.get('locale'));

  const data = pages.find(({ slug }) => normId(slug) === id);

  return Response.json({
    status: 200,
    data,
  });
};

export { GET };
