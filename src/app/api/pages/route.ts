import { NextRequest, NextResponse } from 'next/server';

import { defaultLocale } from '@/constants/locales';
import { Locale, Page } from '@/types';
import { entries, getTranslations, isType } from '@/utils';

type SearchParams = {
  page: number;
  perPage: number;
  isSelected: boolean;
  type?: Page['type'];
  locale: Locale['value'];
};

const DEFAULT_PARAMS: SearchParams = {
  page: 1,
  perPage: 5,
  isSelected: false,
  type: undefined,
  locale: defaultLocale.value
};

type PagesResponse =
  | { ok: false; status: 500; message: string }
  | {
      ok: true;
      status: 200;
      data: Record<string, Page>;
      meta: {
        page: number;
        totalPages: number;
        totalResults: number;
      };
    };

const GET = async (
  request: NextRequest
): Promise<ReturnType<typeof NextResponse.json<PagesResponse>>> => {
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
    isSelected: searchParams.get('is-selected'),
    type: searchParams.get('type'),
    locale: searchParams.get('locale')
  };

  return {
    page: isType<SearchParams['page']>(!!params.page, params.page)
      ? parseInt(params.page)
      : DEFAULT_PARAMS.page,
    perPage: isType<SearchParams['perPage']>(!!params.perPage, params.perPage)
      ? parseInt(params.perPage)
      : DEFAULT_PARAMS.perPage,
    isSelected: isType<SearchParams['isSelected']>(
      !!params.isSelected,
      params.isSelected
    )
      ? params.isSelected
      : DEFAULT_PARAMS.isSelected,
    type: isType<SearchParams['type']>(!!params.type, params.type)
      ? params.type
      : DEFAULT_PARAMS.type,
    locale: isType<SearchParams['locale']>(!!params.locale, params.locale)
      ? params.locale
      : DEFAULT_PARAMS.locale
  };
};

const resolveResults = (params: ReturnType<typeof resolveParams>) => {
  const t = getTranslations(params.locale);
  let resultsAux = entries(t.pages.root);

  if (params.isSelected)
    resultsAux = resultsAux.filter(
      ([_, d]) => (!d.type || d.type === 'default') && d.isSelected
    );

  if (params.type)
    resultsAux = resultsAux.filter(
      ([_, d]) =>
        d.type === params.type || (params.type === 'default' && !d.type)
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
export type { PagesResponse };
