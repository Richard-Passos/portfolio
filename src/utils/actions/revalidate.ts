'use server';

import { RevalidateResponse } from '@/app/api/revalidate/route';
import { baseUrl } from '@/constants';

const revalidate = async (...tags: string[]) => {
  const revalidateToken = process.env.REVALIDATE_TOKEN;

  if (revalidateToken === undefined)
    throw new Error('REVALIDATE_TOKEN is not defined in environment variables');

  const response = await fetch(`${baseUrl}/api/revalidate`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${revalidateToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ tags })
  });

  if (!response.ok) {
    const error = await response.text();

    throw new Error(`Revalidation failed: ${response.status} ${error}`);
  }

  return (await response.json()) as RevalidateResponse;
};

export default revalidate;
