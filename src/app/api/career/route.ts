import { NextRequest, NextResponse } from 'next/server';

import { defaultLocale } from '@/constants/locales';
import { Career, Locale } from '@/types';
import { entries, getTranslations, isType, normId } from '@/utils';

type SearchParams = {
  page: number;
  perPage: number;
  role?: string;
  locale: Locale['value'];
};

const DEFAULT_PARAMS: SearchParams = {
  page: 1,
  perPage: 5,
  role: undefined,
  locale: defaultLocale.value
};

type CareerResponse =
  | { ok: false; status: 500; message: string }
  | {
      ok: true;
      status: 200;
      data: Record<string, Career>;
      meta: {
        page: number;
        totalPages: number;
        totalResults: number;
      };
    };

const GET = async (
  request: NextRequest
): Promise<ReturnType<typeof NextResponse.json<CareerResponse>>> => {
  try {
    const { searchParams } = request.nextUrl,
      params = resolveParams(searchParams),
      { results, totalResults } = resolveResults(params);

    return NextResponse.json(
      {
        ok: true,
        status: 200,
        data: results,
        meta: {
          page: params.page,
          totalPages: Math.ceil(totalResults / params.perPage),
          totalResults
        }
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

const resolveParams = (searchParams: URLSearchParams) => {
  const params: Record<keyof SearchParams, string | null> = {
    page: searchParams.get('page'),
    perPage: searchParams.get('per-page'),
    role: searchParams.get('role'),
    locale: searchParams.get('locale')
  };

  return {
    page: isType<SearchParams['page']>(!!params.page, params.page)
      ? parseInt(params.page)
      : DEFAULT_PARAMS.page,
    perPage: isType<SearchParams['perPage']>(!!params.perPage, params.perPage)
      ? parseInt(params.perPage)
      : DEFAULT_PARAMS.perPage,
    role: isType<SearchParams['role']>(!!params.role, params.role)
      ? params.role
      : DEFAULT_PARAMS.role,
    locale: isType<SearchParams['locale']>(!!params.locale, params.locale)
      ? params.locale
      : DEFAULT_PARAMS.locale
  };
};

const resolveResults = (params: ReturnType<typeof resolveParams>) => {
  const t = getTranslations(params.locale);
  let resultsAux = entries(t.career);

  if (params.role)
    resultsAux = resultsAux.filter(([_, data]) =>
      data.roles.some((r) => normId(r) === params.role)
    );

  return {
    totalResults: resultsAux.length,
    results: Object.fromEntries(
      resultsAux.slice(
        (params.page - 1) * params.perPage,
        params.page * params.perPage
      )
    )
  };
};

export { GET };
export type { CareerResponse };
