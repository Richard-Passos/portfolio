import { NextRequest, NextResponse } from 'next/server';

import { defaultLocale } from '@/constants/locales';
import { Locale, Project } from '@/types';
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

type SingleProjectResponse =
  | { ok: false; status: 404; message: string }
  | { ok: false; status: 500; message: string }
  | {
      ok: true;
      status: 200;
      data: Project;
      meta: {
        adjacentIds: {
          prev?: string;
          next?: string;
        };
      };
    };

const GET = async (
  request: NextRequest,
  { params: p }: { params: Params }
): Promise<ReturnType<typeof NextResponse.json<SingleProjectResponse>>> => {
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

    const projects = await t.projects();

    let dataIndex = projects.findIndex((p) => normId(p.slug) === slug);

    if (dataIndex === -1)
      return NextResponse.json({
        ok: false,
        status: 404,
        message: 'Project not found!'
      });

    const prevId = projects.at(dataIndex > 0 ? dataIndex - 1 : -1)?.slug,
      nextId = projects.at(
        dataIndex < projects.length - 1 ? dataIndex + 1 : 0
      )?.slug;

    const data = projects[dataIndex]!,
      adjacentIds = {
        prev: prevId,
        next: nextId
      };

    return NextResponse.json({
      ok: true,
      status: 200,
      data,
      meta: { adjacentIds }
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
export type { Params, SingleProjectResponse };
