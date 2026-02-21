import { revalidateTag } from 'next/cache';
import { headers } from 'next/headers';

import { API } from '@/utils/actions';
import { APIResponse } from '@/utils/actions/API';
import response, { Responses } from '@/utils/actions/response';

type RevalidateBody = {
  tags: string[];
};

type RevalidateExtraResponse =
  | { ok: false; status: 400; message: string }
  | Responses['success'];
type RevalidateResponse = APIResponse<RevalidateExtraResponse>;

const POST = API<RevalidateExtraResponse>(
  async (request) => {
    const body = (await request.json()) as RevalidateBody,
      { tags } = body;

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
