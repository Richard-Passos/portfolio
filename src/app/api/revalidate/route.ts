import { revalidateTag } from 'next/cache';
import { headers } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

type RevalidateBody = {
  tags: string[];
};

type RevalidateResponse =
  | { ok: false; status: 400; message: string }
  | { ok: false; status: 401; message: string }
  | { ok: false; status: 500; message: string }
  | { ok: true; status: 200 };

const POST = async (
  request: NextRequest
): Promise<ReturnType<typeof NextResponse.json<RevalidateResponse>>> => {
  try {
    const headersList = await headers(),
      secret = headersList.get('Authorization');

    if (secret !== `Bearer ${process.env.REVALIDATE_TOKEN}`)
      return NextResponse.json(
        {
          ok: false,
          status: 401,
          message: 'Unauthorized!'
        },
        { status: 401 }
      );

    const body = (await request.json()) as RevalidateBody,
      { tags } = body;

    if (!Array.isArray(tags) || tags.some((t) => typeof t !== 'string')) {
      return NextResponse.json(
        {
          ok: false,
          status: 400,
          message: 'Invalid tags format. Expected an array of strings.'
        },
        { status: 400 }
      );
    }

    tags.forEach((t) => revalidateTag(t, { expire: 0 }));

    return NextResponse.json(
      {
        ok: true,
        status: 200
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      {
        ok: false,
        status: 500,
        message: 'Something went wrong!'
      },
      { status: 500 }
    );
  }
};

export { POST };
export type { RevalidateResponse };
