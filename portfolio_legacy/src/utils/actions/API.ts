import { NextRequest, NextResponse } from 'next/server';

import { isAuth } from './isAuth';
import { Responses, response } from './response';

type Response = Responses[keyof Responses];
type Params = Promise<object> | never;

type APIResponse<R extends Response> =
  | Responses['unauthorized']
  | Responses['error']
  | R;

type callback<R extends Response, P extends Params> = (
  request: NextRequest,
  headers: unknown,
  params: P
) => Promise<NextResponse<R>> | NextResponse<R>;

const API =
  <R extends Response, P extends Params = never>(
    cb: callback<R, P>,
    headers: () => Promise<any>,
    authEnv = process.env.AUTH_TOKEN
  ) =>
  async (
    request: NextRequest,
    { params }: { params: P }
  ): Promise<NextResponse<APIResponse<R>>> => {
    try {
      const headersList = await headers();
      if (!isAuth(headersList, authEnv)) {
        return response('unauthorized');
      }

      return await cb(request, headersList, params);
    } catch (e) {
      return response('error');
    }
  };

export { API };
export type { APIResponse };
