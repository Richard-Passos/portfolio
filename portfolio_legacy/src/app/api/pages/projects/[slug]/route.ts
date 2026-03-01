import { merge } from 'lodash';
import { headers } from 'next/headers';

import { BASE_URL } from '@/constants';
import { DEFAULT_LOCALE } from '@/constants';
import { DeepPartial, Project, ProjectPage } from '@/types';
import { entries, getParams, getTranslations, normId, values } from '@/utils';
import {
  API,
  APIResponse,
  Responses,
  projectsApi,
  response
} from '@/utils/actions';

type Params = Promise<{
  slug: string;
}>;

type SingleProjectPageResponse = APIResponse<
  | Responses['not-found']
  | (Responses['success'] & {
      data: ProjectPage;
    })
>;

const GET = API<SingleProjectPageResponse, Params>(
  async ({ nextUrl: { searchParams } }, _, requestParams) => {
    const params = await resolveParams(searchParams, requestParams),
      data = await resolveResults(params);

    if (data === undefined) {
      return response('not-found');
    }

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
  const paramsRes = await requestParams;

  return {
    ...getParams(
      searchParams,
      { locale: 'locale' },
      { locale: DEFAULT_LOCALE.value }
    ),
    slug: normId(paramsRes.slug)
  };
};

const resolveResults = async (
  params: Awaited<ReturnType<typeof resolveParams>>
) => {
  const defaultPage = await resolveDefaultPage(params);

  if (defaultPage === undefined) {
    return undefined;
  }

  const t = getTranslations(params.locale),
    projectPage = t.pages.project;

  return merge(defaultPage, projectPage);
};

const resolveDefaultPage = async (
  params: Awaited<ReturnType<typeof resolveParams>>
): Promise<DeepPartial<ProjectPage> | undefined> => {
  const projectRes = await projectsApi.getOne({
    locale: params.locale,
    slug: params.slug
  });

  if (!projectRes.ok) {
    return undefined;
  }

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
        url: `${BASE_URL}/projects/${params.slug}`,
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
      type: 'SingleProjectImagesBlock',
      data: {
        items: Object.fromEntries(entries(project.images))
      }
    },
    adjacents: {
      type: 'SingleProjectAdjacentsBlock',
      data: {
        prev: adjacents.prev
          ? {
              href: `/projects/${adjacents.prev.slug}`,
              name: adjacents.prev.title
            }
          : undefined,
        next: adjacents.next
          ? {
              href: `/projects/${adjacents.next.slug}`,
              name: adjacents.next.title
            }
          : undefined
      }
    }
  };
};

export { GET };
export type { Params, SingleProjectPageResponse };
