import { NextResponse } from 'next/server';

import { projectsDetails } from '@/constants/projects';

const GET = async (_, { params: { id } }) => {
  return NextResponse.json({ status: 200, data: projectsDetails[id] });
};

export { GET };
