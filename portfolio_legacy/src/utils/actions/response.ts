import { NextResponse } from 'next/server';

const RESPONSES = {
  unauthorized: { ok: false, status: 401, message: 'Unauthorized!' },
  error: { ok: false, status: 500, message: 'Internal server error!' },
  'not-found': { ok: false, status: 404, message: 'Not found!' },
  success: { ok: true, status: 200, message: 'Success!' },
  custom: {} as ResponseConfig
} as const;

type Responses = typeof RESPONSES;
type ResponseConfig = { ok: boolean; status: number; message: string };

const response = <K extends keyof Responses, T extends object>(
  type: K,
  ...args: K extends 'custom'
    ? [config: ResponseConfig & Omit<T, keyof ResponseConfig>]
    : [config?: Omit<T, keyof Responses[K]>]
): NextResponse<
  Responses[K] & (K extends 'custom' ? ResponseConfig & T : T)
> => {
  const baseRes = RESPONSES[type],
    config = args[0],
    response = Object.assign(baseRes, config);

  return NextResponse.json(response, {
    status: (response as any).status
  }) as any;
};

export { response };
export type { Responses };
