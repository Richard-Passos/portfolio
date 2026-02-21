import { merge } from 'lodash';
import { headers } from 'next/headers';

import { baseUrl, defaultPages } from '@/constants';
import { defaultLocale } from '@/constants/locales';
import { DeepPartial, Locale, Project, ProjectPage } from '@/types';
import { entries, getTranslations, isType, normId, values } from '@/utils';
import { API, projectsApi } from '@/utils/actions';
import { APIResponse } from '@/utils/actions/API';
import response, { Responses } from '@/utils/actions/response';

type Params = Promise<{
  slug: string;
}>;

type SearchParams = {
  locale: Locale['value'];
};

const DEFAULT_PARAMS: SearchParams = {
  locale: defaultLocale.value
};

type SingleProjectPageSuccessResponse =
  | Responses['not-found']
  | (Responses['success'] & {
      data: ProjectPage;
    });
type SingleProjectPageResponse = APIResponse<SingleProjectPageSuccessResponse>;

const GET = API<SingleProjectPageSuccessResponse, Params>(
  async ({ nextUrl: { searchParams } }, _, requestParams) => {
    const params = await resolveParams(searchParams, requestParams),
      data = await resolveResults(params);

    if (data === undefined) return response('not-found');

    return response('success', {
      data
    });
  },
  headers
);

const resolveParams = async (
  searchParams: URLSearchParams,
  requestParams: Params
) => {
  const requestParamsRes = await requestParams;

  const params: Record<keyof SearchParams, string | null> = {
    locale: searchParams.get('locale')
  };

  return {
    locale: isType<SearchParams['locale']>(!!params.locale, params.locale)
      ? params.locale
      : DEFAULT_PARAMS.locale,
    slug: normId(requestParamsRes.slug)
  };
};

const resolveResults = async (
  params: Awaited<ReturnType<typeof resolveParams>>
) => {
  const defaultPage = await resolveDefaultPage(params);

  if (defaultPage === undefined) return undefined;

  const t = getTranslations(params.locale),
    projectPage = t.pages.project;

  return merge(defaultPage, projectPage) as ProjectPage;
};

const resolveDefaultPage = async (
  params: Awaited<ReturnType<typeof resolveParams>>
): Promise<DeepPartial<ProjectPage> | undefined> => {
  const projectRes = await projectsApi.getOne({
    locale: params.locale,
    slug: params.slug
  });

  if (!projectRes.ok) return undefined;

  const t = getTranslations(params.locale),
    project = projectRes.data,
    hero = resolveHero(project);

  const { prev: prevId, next: nextId } = projectRes.meta.adjacentIds,
    blocks = resolveBlocks(project, {
      prev: prevId
        ? {
            slug: prevId,
            ...(t.projects[prevId] as Project)
          }
        : undefined,
      next: nextId
        ? {
            slug: nextId,
            ...(t.projects[nextId] as Project)
          }
        : undefined
    });

  return {
    type: 'project',
    hero,
    blocks,
    metadata: {
      title: project.title,
      description: project.description,
      openGraph: {
        title: project.title,
        description: project.description,
        url: `${baseUrl}/${defaultPages.projects}/${params.slug}`,
        locale: params.locale,
        type: 'website',
        images: [
          project.banner.src,
          ...values(project.images).map((d) => d.src)
        ]
      }
    }
  };
};

const resolveHero = (project: Project): DeepPartial<ProjectPage['hero']> => {
  return {
    data: {
      title: project.title,
      description: project.description,
      subtitle: `${project.roles.join(' & ')} — ${project.year}`,
      action: {
        href: project.href
      },
      image: project.banner
    }
  };
};

const resolveBlocks = (
  project: Project,
  adjacents: {
    prev?: { slug: string } & Project;
    next?: { slug: string } & Project;
  }
): DeepPartial<ProjectPage['blocks']> => {
  return {
    images: {
      type: 'ProjectImages',
      data: {
        items: Object.fromEntries(entries(project.images))
      }
    },
    adjacents: {
      type: 'Adjacents',
      data: {
        prev: adjacents.prev
          ? {
              href: `/${defaultPages.projects}/${adjacents.prev.slug}`,
              name: adjacents.prev.title
            }
          : undefined,
        next: adjacents.next
          ? {
              href: `/${defaultPages.projects}/${adjacents.next.slug}`,
              name: adjacents.next.title
            }
          : undefined
      }
    }
  };
};

export { GET };
export type { Params, SingleProjectPageResponse };
