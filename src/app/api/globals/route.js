import { getConstants } from '@/utils';

const RES_PER_PAGE = 5;

const GET = async (req) => {
  const { searchParams } = req.nextUrl;

  const { globals = [] } = getConstants(searchParams.get('locale'));

  const page = searchParams.get('page') || 1;

  const results = globals.slice((page - 1) * RES_PER_PAGE, page * RES_PER_PAGE),
    totalResults = globals.length;

  return Response.json({
    status: 200,
    data: results,
    meta: {
      page,
      totalPages: Math.ceil(totalResults / RES_PER_PAGE),
      totalResults,
    },
  });
};

export { GET };
