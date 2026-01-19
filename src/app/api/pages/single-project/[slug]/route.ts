import { NextRequest, NextResponse } from 'next/server';

import { baseUrl, defaultPages } from '@/constants';
import { defaultLocale } from '@/constants/locales';
import { DeepPartial, Locale, SingleProjectPage } from '@/types';
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

type SingleProjectPageResponse =
  | { ok: false; status: 404; message: string }
  | { ok: false; status: 500; message: string }
  | {
      ok: true;
      status: 200;
      data: SingleProjectPage;
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
): Promise<ReturnType<typeof NextResponse.json<SingleProjectPageResponse>>> => {
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

    let projectIndex = projects.findIndex((d) => normId(d.slug) === slug);

    if (projectIndex === -1)
      return NextResponse.json({
        ok: false,
        status: 404,
        message: 'Project not found!'
      });

    const pages = await t.pages();

    const page = pages.find((d) => d.slug === defaultPages.singleProject) as
      | DeepPartial<SingleProjectPage>
      | undefined;

    if (!page)
      return NextResponse.json({
        ok: false,
        status: 404,
        message: 'Page not found!'
      });

    const prevId = projects.at(projectIndex > 0 ? projectIndex - 1 : -1)?.slug,
      nextId = projects.at(
        projectIndex < projects.length - 1 ? projectIndex + 1 : 0
      )?.slug;

    const project = projects[projectIndex]!,
      prevProject = projects.find((d) => d.slug === prevId),
      nextProject = projects.find((d) => d.slug === nextId),
      adjacentIds = {
        prev: prevId,
        next: nextId
      };

    const defaultPage: SingleProjectPage = {
      type: 'single-project',
      slug: '',
      hero: {
        theme: 'light',
        data: {
          title: project.title,
          description: project.description,
          subtitle: `${project.roles.join(' & ')} — ${project.year}`,
          action: {
            href: project.href,
            label: ''
          },
          image: {
            src: project.banner.src,
            alt: project.banner.alt
          }
        }
      },
      blocks: {
        Images: {
          theme: 'light',
          data: {
            items: project.images ?? []
          }
        },
        Adjacents: {
          theme: 'light',
          data: {
            prev: {
              href: `/${defaultPages.projects}/${prevProject?.slug}`,
              label: '',
              name: prevProject?.title
            },
            next: {
              href: `/${defaultPages.projects}/${nextProject?.slug}`,
              label: '',
              name: nextProject?.title
            }
          }
        }
      },
      metadata: {
        title: project.title,
        description: project.description,
        openGraph: {
          title: project.title,
          description: project.description,
          url: `${baseUrl}/${defaultPages.projects}/${project.slug}`,
          locale: locale,
          type: 'website',
          images: [
            project.banner.src,
            ...(project.images?.map((d) => d.src) ?? [])
          ]
        }
      }
    };

    const data: SingleProjectPage = {
      ...defaultPage,
      ...page,
      hero: {
        ...defaultPage.hero,
        ...page.hero,
        data: {
          ...defaultPage.hero.data,
          ...page.hero?.data,
          action: {
            ...defaultPage.hero.data.action,
            ...page.hero?.data?.action
          },
          image: {
            ...defaultPage.hero.data.image,
            ...page.hero?.data?.image
          }
        }
      },
      blocks: {
        Images: {
          ...defaultPage.blocks.Images,
          ...page.blocks?.Images,
          data: {
            ...defaultPage.blocks.Images?.data,
            ...page.blocks?.Images?.data,
            items: defaultPage.blocks.Images.data.items
          }
        },
        Adjacents: {
          ...defaultPage.blocks.Adjacents,
          ...page.blocks?.Adjacents,
          data: {
            prev: {
              ...defaultPage.blocks.Adjacents?.data?.prev,
              ...page.blocks?.Adjacents?.data?.prev
            },
            next: {
              ...defaultPage.blocks.Adjacents?.data?.next,
              ...page.blocks?.Adjacents?.data?.next
            }
          }
        }
      },
      metadata: {
        ...defaultPage.metadata,
        ...page.metadata
      }
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
export type { Params, SingleProjectPageResponse };
