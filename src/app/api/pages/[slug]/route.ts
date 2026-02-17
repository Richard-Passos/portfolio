import { NextRequest, NextResponse } from 'next/server';

import { defaultLocale } from '@/constants/locales';
import { Locale, Page } from '@/types';
import { getTranslations, isType, normId } from '@/utils';

type Params = Promise<{
  slug: string;
}>;

type SearchParams = {
  locale: Locale['value'];
};

const DEFAULT_PARAMS: SearchParams = {
  locale: defaultLocale.value
};

type SinglePageResponse =
  | { ok: false; status: 404; message: string }
  | { ok: false; status: 500; message: string }
  | {
      ok: true;
      status: 200;
      data: Page;
    };

const GET = async (
  request: NextRequest,
  { params: requestParams }: { params: Params }
): Promise<ReturnType<typeof NextResponse.json>> => {
  try {
    const { searchParams } = request.nextUrl,
      params = await resolveParams(searchParams, requestParams),
      data = resolveResults(params);

    if (data === undefined)
      return NextResponse.json({
        ok: false,
        status: 404,
        message: 'Page not found!'
      });

    return NextResponse.json({
      ok: true,
      status: 200,
      data
    });
  } catch {
    return NextResponse.json({
      ok: false,
      status: 500,
      message: 'Something went wrong!'
    });
  }
};

const resolveParams = async (
  searchParams: URLSearchParams,
  requestParams: Params
) => {
  const requestParamsRes = await requestParams;

  const params: Record<keyof SearchParams, string | null> = {
    locale: searchParams.get('locale')
  };

  return {
    slug: normId(requestParamsRes.slug),
    locale: isType<SearchParams['locale']>(!!params.locale, params.locale)
      ? params.locale
      : DEFAULT_PARAMS.locale
  };
};

const resolveResults = (params: Awaited<ReturnType<typeof resolveParams>>) => {
  const t = getTranslations(params.locale);

  return (t.pages as unknown as Record<string, Page>)[params.slug] ?? undefined;
};

export { GET };
export type { SinglePageResponse };
