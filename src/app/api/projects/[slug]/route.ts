import { NextRequest, NextResponse } from 'next/server';

import { defaultLocale } from '@/constants/locales';
import { Locale, Project } from '@/types';
import { getTranslations, isType, keys, normId } from '@/utils';

type Params = Promise<{
  slug: string;
}>;

type SearchParams = {
  locale: Locale['value'];
};

const DEFAULT_PARAMS: SearchParams = {
  locale: defaultLocale.value
};

type SingleProjectResponse =
  | { ok: false; status: 404; message: string }
  | { ok: false; status: 500; message: string }
  | {
      ok: true;
      status: 200;
      data: Project;
      meta: {
        adjacentIds: {
          prev?: string;
          next?: string;
        };
      };
    };

const GET = async (
  request: NextRequest,
  { params: requestParams }: { params: Params }
): Promise<ReturnType<typeof NextResponse.json<SingleProjectResponse>>> => {
  try {
    const { searchParams } = request.nextUrl,
      params = await resolveParams(searchParams, requestParams),
      { data, adjacentIds } = resolveResults(params);

    if (data === undefined)
      return NextResponse.json({
        ok: false,
        status: 404,
        message: 'Project not found!'
      });

    return NextResponse.json({
      ok: true,
      status: 200,
      data,
      meta: { adjacentIds }
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
    locale: isType<SearchParams['locale']>(!!params.locale, params.locale)
      ? params.locale
      : DEFAULT_PARAMS.locale,
    slug: normId(requestParamsRes.slug)
  };
};

const resolveResults = (params: Awaited<ReturnType<typeof resolveParams>>) => {
  const t = getTranslations(params.locale),
    data = (t.projects as Record<string, Project>)[params.slug] ?? undefined;

  if (data === undefined) return {};

  const resultsAux = keys(t.projects),
    index = resultsAux.indexOf(params.slug);

  return {
    data,
    adjacentIds: {
      prev: resultsAux.at(index > 0 ? index - 1 : -1),
      next: resultsAux.at(index < resultsAux.length - 1 ? index + 1 : 0)
    }
  };
};

export { GET };
export type { Params, SingleProjectResponse };
