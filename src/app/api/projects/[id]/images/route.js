import { NextResponse } from 'next/server';

import { projectsImages } from '@/constants/projects';

const GET = async (_, { params: { id } }) => {
  return NextResponse.json({
    status: 200,
    data: projectsImages[id],
  });
};

export { GET };
