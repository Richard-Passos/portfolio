'use server';

import { RevalidateResponse } from '@/app/api/revalidate/route';
import { BASE_URL, REVALIDATE_TOKEN } from '@/constants';

const revalidate = async (...tags: string[]) => {
  const response = await fetch(`${BASE_URL}/api/revalidate`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${REVALIDATE_TOKEN}`,
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

export { revalidate };
