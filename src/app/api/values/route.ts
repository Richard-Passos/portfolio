import { NextRequest, NextResponse } from 'next/server';

import { defaultLocale } from '@/constants/locales';
import { Locale, Value } from '@/types';
import { getTranslations, isType } from '@/utils';

type SearchParams = {
  locale: Locale['value'];
};

const DEFAULT_PARAMS: SearchParams = {
  locale: defaultLocale.value
};

type ValuesResponse =
  | { ok: false; status: 500; message: string }
  | {
      ok: true;
      status: 200;
      data: Record<string, Value>;
    };

const GET = async (
  request: NextRequest
): Promise<ReturnType<typeof NextResponse.json<ValuesResponse>>> => {
  try {
    const { searchParams } = request.nextUrl,
      params = resolveParams(searchParams),
      results = resolveResults(params);

    return NextResponse.json(
      {
        ok: true,
        status: 200,
        data: results
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
    locale: searchParams.get('locale')
  };

  return {
    locale: isType<SearchParams['locale']>(!!params.locale, params.locale)
      ? params.locale
      : DEFAULT_PARAMS.locale
  };
};

const resolveResults = (params: ReturnType<typeof resolveParams>) => {
  const t = getTranslations(params.locale);

  return t.values;
};

export { GET };
export type { ValuesResponse };
