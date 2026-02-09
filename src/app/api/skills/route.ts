import { NextRequest, NextResponse } from 'next/server';

import { defaultLocale } from '@/constants/locales';
import { Locale, Skill } from '@/types';
import { getTranslations, isType } from '@/utils';

type SearchParams = {
  locale: Locale['value'];
};

const DEFAULT_PARAMS: SearchParams = {
  locale: defaultLocale.value
};

type SkillsResponse =
  | { ok: false; status: 404; message: string }
  | { ok: false; status: 500; message: string }
  | {
      ok: true;
      status: 200;
      data: {
        hard: Skill[];
        soft: Skill[];
      };
    };

const GET = async (
  request: NextRequest
): Promise<ReturnType<typeof NextResponse.json<SkillsResponse>>> => {
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

    const results = await t.skills();

    if (!results)
      return NextResponse.json({
        ok: false,
        status: 404,
        message: 'Skills not found!'
      });

    return NextResponse.json({
      ok: true,
      status: 200,
      data: results
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
export type { SkillsResponse };
