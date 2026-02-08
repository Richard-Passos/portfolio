import { NextRequest, NextResponse } from 'next/server';

import { defaultLocale } from '@/constants/locales';
import { Career, Locale } from '@/types';
import { getTranslations, isType, normId, values } from '@/utils';

type SearchParams = {
  page: number;
  perPage: number;
  role: string;
  locale: Locale['value'];
};

const DEFAULT_PARAMS: SearchParams = {
  page: 1,
  perPage: 5,
  role: '',
  locale: defaultLocale.value
};

type CareerResponse =
  | { ok: false; status: 500; message: string }
  | {
      ok: true;
      status: 200;
      data: Career[];
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
    const { searchParams } = request.nextUrl;

    const params: Record<keyof SearchParams, string | null> = {
      page: searchParams.get('page'),
      perPage: searchParams.get('per-page'),
      role: searchParams.get('role'),
      locale: searchParams.get('locale')
    };

    const page = isType<SearchParams['page']>(!!params.page, params.page)
        ? parseInt(params.page)
        : DEFAULT_PARAMS.page,
      perPage = isType<SearchParams['perPage']>(
        !!params.perPage,
        params.perPage
      )
        ? parseInt(params.perPage)
        : DEFAULT_PARAMS.perPage,
      role = isType<SearchParams['role']>(!!params.role, params.role)
        ? params.role
        : DEFAULT_PARAMS.role,
      locale = isType<SearchParams['locale']>(!!params.locale, params.locale)
        ? params.locale
        : DEFAULT_PARAMS.locale;

    const t = getTranslations(locale);

    const career = await t.career();

    let results = career;

    if (role)
      results = results.filter((data) => {
        const roles = values(data.roles);

        return roles.some((r) => normId(r) === role);
      });

    const totalResults = results.length;

    results = results.slice((page - 1) * perPage, page * perPage);

    return NextResponse.json({
      ok: true,
      status: 200,
      data: results,
      meta: {
        page,
        totalPages: Math.ceil(totalResults / perPage),
        totalResults
      }
    });
  } catch {
    return NextResponse.json({
      ok: false,
      status: 500,
      message: 'Something went wrong!'
    });
  }
};

export { GET };
export type { CareerResponse };
