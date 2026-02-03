import { NextRequest, NextResponse } from 'next/server';

import { defaultLocale } from '@/constants/locales';
import { Footer, Locale } from '@/types';
import { getTranslations, isType } from '@/utils';

type SearchParams = {
  locale: Locale['value'];
};

const DEFAULT_PARAMS: SearchParams = {
  locale: defaultLocale.value
};

type FooterResponse =
  | { ok: false; status: 500; message: string }
  | {
      ok: true;
      data: Footer;
      status: 200;
    };

const GET = async (
  request: NextRequest
): Promise<ReturnType<typeof NextResponse.json<FooterResponse>>> => {
  try {
    const { searchParams } = request.nextUrl;

    const params: Record<keyof SearchParams, string | null> = {
      locale: searchParams.get('locale')
    };

    const locale = isType<SearchParams['locale']>(
      !!params.locale,
      params.locale
    )
      ? params.locale
      : DEFAULT_PARAMS.locale;

    const t = getTranslations(locale);

    const data = await t.footer();

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

export { GET };
export type { FooterResponse };
