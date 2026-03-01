import { headers } from 'next/headers';

import { DEFAULT_LOCALE } from '@/constants';
import { Project } from '@/types';
import { entries, getParams, getTranslations, normId } from '@/utils';
import { API, APIResponse, Responses, response } from '@/utils/actions';

type ProjectsResponse = APIResponse<
  Responses['success'] & {
    data: Record<string, Project>;
    meta: {
      page: number;
      totalPages: number;
      totalResults: number;
    };
  }
>;

const GET = API<ProjectsResponse>(({ nextUrl: { searchParams } }) => {
  const params = resolveParams(searchParams),
    { results, totalResults } = resolveResults(params);

  return response('success', {
    data: results,
    meta: {
      page: params.page,
      totalPages: Math.ceil(totalResults / params.perPage),
      totalResults
    }
  });
}, headers);

const resolveParams = (searchParams: URLSearchParams) =>
  getParams(
    searchParams,
    {
      page: 'number',
      perPage: 'number',
      isSelected: 'bool',
      role: 'id',
      locale: 'locale'
    },
    {
      page: 1,
      perPage: 5,
      isSelected: false,
      role: undefined,
      locale: DEFAULT_LOCALE.value
    }
  );

const resolveResults = (params: ReturnType<typeof resolveParams>) => {
  const t = getTranslations(params.locale);
  let resultsAux = entries(t.projects);

  if (params.isSelected) {
    resultsAux = resultsAux.filter(([_, d]) => d.isSelected);
  }

  if (params.role) {
    resultsAux = resultsAux.filter(([_, d]) =>
      d.roles.some((r) => normId(r) === params.role)
    );
  }

  return {
    totalResults: resultsAux.length,
    results: Object.fromEntries(
      resultsAux.slice(
        (params.page - 1) * params.perPage,
        params.page * params.perPage
      )
    )
  };
};

export { GET };
export type { ProjectsResponse };
