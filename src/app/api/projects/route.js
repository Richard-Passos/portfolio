import { NextResponse } from 'next/server';

import { projects } from '@/constants';

const RES_PER_PAGE = 5;

const GET = async (req) => {
  try {
    const page = 1;
    log += ` ${page}`;

    log += ` ${req.nextUrl.searchParams}`;
    const results = projects.slice(
        (page - 1) * RES_PER_PAGE,
        page * RES_PER_PAGE,
      ),
      totalResults = projects.length;

    return NextResponse.json({
      status: 200,
      page,
      results,
      totalPages: Math.ceil(totalResults / RES_PER_PAGE),
      totalResults,
      log,
    });
  } catch {
    return NextResponse.json({
      status: 400,
      message: 'Failed to fetch data',
      results: [],
      log,
    });
  }
};

export { GET };
