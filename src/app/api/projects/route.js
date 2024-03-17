import { projects } from '@/constants/projects';

const RES_PER_PAGE = 5;

const GET = async (req) => {
  const { searchParams } = req.nextUrl;

  const page = searchParams.get('page') || 1;

  const results = projects.slice(
      (page - 1) * RES_PER_PAGE,
      page * RES_PER_PAGE,
    ),
    totalResults = projects.length;

  return Response.json({
    status: 200,
    data: {
      page,
      results,
      totalPages: Math.ceil(totalResults / RES_PER_PAGE),
      totalResults,
    },
  });
};

export { GET };
