import { NextRequest, NextResponse } from 'next/server';

import { defaultLocale } from '@/constants/locales';
import { Locale, Project } from '@/types';
import { entries, getTranslations, isType, normId } from '@/utils';

type SearchParams = {
  page: number;
  perPage: number;
  role?: string;
  isSelected: 'false' | 'true';
  locale: Locale['value'];
};

const DEFAULT_PARAMS: SearchParams = {
  page: 1,
  perPage: 5,
  role: undefined,
  isSelected: 'false',
  locale: defaultLocale.value
};

type ProjectsResponse =
  | { ok: false; status: 500; message: string }
  | {
      ok: true;
      status: 200;
      data: Record<string, Project>;
      meta: {
        page: number;
        totalPages: number;
        totalResults: number;
      };
    };

const GET = async (
  request: NextRequest
): Promise<ReturnType<typeof NextResponse.json<ProjectsResponse>>> => {
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
    isSelected: searchParams.get('is-selected'),
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
      ? normId(params.role)
      : DEFAULT_PARAMS.role,
    isSelected: isType<SearchParams['isSelected']>(
      !!params.isSelected,
      params.isSelected
    )
      ? !!params.isSelected
      : DEFAULT_PARAMS.isSelected,
    locale: isType<SearchParams['locale']>(!!params.locale, params.locale)
      ? params.locale
      : DEFAULT_PARAMS.locale
  };
};

const resolveResults = (params: ReturnType<typeof resolveParams>) => {
  const t = getTranslations(params.locale);
  let resultsAux = entries(t.projects);

  if (params.isSelected)
    resultsAux = resultsAux.filter(([_, d]) => d.isSelected);

  if (params.role)
    resultsAux = resultsAux.filter(([_, d]) =>
      d.roles.some((r) => normId(r) === params.role)
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
export type { ProjectsResponse };
