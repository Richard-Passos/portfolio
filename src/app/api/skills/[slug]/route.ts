import { NextRequest, NextResponse } from 'next/server';

import { defaultLocale } from '@/constants/locales';
import { Locale, Skill } from '@/types';
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

type SkillsResponse =
  | { ok: false; status: 404; message: string }
  | { ok: false; status: 500; message: string }
  | {
      ok: true;
      status: 200;
      data: Skill[];
      meta: {
        totalResults: number;
      };
    };

const GET = async (
  request: NextRequest,
  { params: p }: { params: Params }
): Promise<ReturnType<typeof NextResponse.json<SkillsResponse>>> => {
  try {
    const { searchParams } = request.nextUrl;

    const params: Record<keyof SearchParams, string | null> = {
      locale: searchParams.get('locale')
    };

    let { slug } = await p;
    slug = normId(slug);

    const locale = isType<SearchParams['locale']>(
      !!params.locale,
      params.locale
    )
      ? params.locale
      : DEFAULT_PARAMS.locale;

    const t = getTranslations(locale);

    const skills = await t.skills();

    const results =
      slug in skills ? skills[slug as keyof typeof skills] : undefined;

    if (!results)
      return NextResponse.json({
        ok: false,
        status: 404,
        message: 'Skills not found!'
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
export type { Params, SkillsResponse };
