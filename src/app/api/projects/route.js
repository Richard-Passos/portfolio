import { getConstants } from '@/utils';

const PAGE = 1,
  PER_PAGE = 5,
  ROLE = 'all';

const GET = (req) => {
  const { searchParams } = req.nextUrl;
  
  const { projects = [] } = getConstants(searchParams.get('locale'))

  const page = searchParams.get('page') || PAGE,
    role = ((role) => (role && role !== 'undefined' ? role : ROLE))(
      searchParams.get('role')?.toLowerCase(''),
    ),
    perPage = +searchParams.get('per-page') || PER_PAGE;

  const results = (
      role !== ROLE
        ? projects.filter((data) =>
            data.roles?.some((data) => data.toLowerCase() === role),
          )
        : projects
    ).slice((page - 1) * perPage, page * perPage),
    totalResults = projects.length;

  return Response.json({
    status: 200,
    data: results,
    meta: {
      page,
      totalPages: Math.ceil(totalResults / PER_PAGE),
      totalResults,
    },
  });
};

export { GET };
