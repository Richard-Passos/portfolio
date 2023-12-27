import { NextResponse } from 'next/server';

import { projects } from '@/constants';

const RES_PER_PAGE = 5;

const GET = async (req) => {
  let log = 'Hello';
  try {
    const { searchParams } = new URL(req.url);

    const page = searchParams.get('page') || 1;

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
      log: 'Hello',
    });
  } catch {
    return NextResponse.json({
      status: 400,
      message: 'Failed to fetch data.',
      results: [],
      log: 'Hello',
    });
  }
};

export { GET };
