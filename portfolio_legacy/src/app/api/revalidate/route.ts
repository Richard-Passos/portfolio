import { revalidateTag } from 'next/cache';
import { headers } from 'next/headers';

import { API, APIResponse, Responses, response } from '@/utils/actions';

type RevalidateBody = {
  tags: string[];
};

type RevalidateResponse = APIResponse<
  { ok: false; status: 400; message: string } | Responses['success']
>;

const POST = API<RevalidateResponse>(
  async (request) => {
    const { tags } = (await request.json()) as RevalidateBody;

    if (!Array.isArray(tags) || tags.some((t) => typeof t !== 'string'))
      return response('custom', {
        ok: false,
        status: 400,
        message: 'Invalid tags format. Expected an array of strings.'
      });

    tags.forEach((t) => revalidateTag(t, { expire: 0 }));

    return response('success');
  },
  headers,
  process.env.REVALIDATE_TOKEN
);

export { POST };
export type { RevalidateResponse };
