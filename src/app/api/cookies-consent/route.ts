import { NextRequest, NextResponse } from 'next/server';

import { defaultLocale } from '@/constants/locales';
import { CookiesConsent, Locale } from '@/types';
import { getTranslations, isType } from '@/utils';

type SearchParams = {
  locale: Locale['value'];
};

const DEFAULT_PARAMS: SearchParams = {
  locale: defaultLocale.value
};

type CookiesConsentResponse =
  | { ok: false; status: 500; message: string }
  | {
      ok: true;
      status: 200;
      data: CookiesConsent;
    };

const GET = async (
  request: NextRequest
): Promise<ReturnType<typeof NextResponse.json<CookiesConsentResponse>>> => {
  try {
    const { searchParams } = request.nextUrl,
      params = resolveParams(searchParams),
      data = resolveResults(params);

    return NextResponse.json(
      {
        ok: true,
        status: 200,
        data
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

  return t.cookiesConsent;
};

export { GET };
export type { CookiesConsentResponse };
