import { projects } from '@/constants';

const RES_PER_PAGE = 5;

const GET = (req) => {
  const { searchParams } = req.nextUrl;

  const page = searchParams.get('page') || 1,
    role = searchParams.get('role') || 'all';

  const results = (
      role !== 'all'
        ? projects.filter((data) =>
            data.roles?.some(
              (data) => data.toLowerCase() === role.toLowerCase(),
            ),
          )
        : projects
    ).slice((page - 1) * RES_PER_PAGE, page * RES_PER_PAGE),
    totalResults = projects.length;

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
