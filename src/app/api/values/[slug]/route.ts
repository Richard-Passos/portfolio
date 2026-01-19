import { NextRequest, NextResponse } from 'next/server';

import { defaultLocale } from '@/constants/locales';
import { Locale, Value } from '@/types';
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

type ValuesResponse =
  | { ok: false; status: 404; message: string }
  | { ok: false; status: 500; message: string }
  | {
      ok: true;
      status: 200;
      data: Value[];
      meta: {
        totalResults: number;
      };
    };

const GET = async (
  request: NextRequest,
  { params: p }: { params: Params }
): Promise<ReturnType<typeof NextResponse.json<ValuesResponse>>> => {
  try {
    const { searchParams } = request.nextUrl;

    let { slug } = await p;
    slug = normId(slug);

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

    const values = await t.values();

    const results =
      slug in values ? values[slug as keyof typeof values] : undefined;

    if (!results)
      return NextResponse.json({
        ok: false,
        status: 404,
        message: 'Values not found!'
      });

    const totalResults = results.length;

    return NextResponse.json({
      ok: true,
      status: 200,
      data: results,
      meta: {
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
export type { Params, ValuesResponse };
