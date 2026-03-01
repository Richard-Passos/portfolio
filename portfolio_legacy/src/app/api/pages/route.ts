import { headers } from 'next/headers';

import { DEFAULT_LOCALE } from '@/constants';
import { TemplateRegistryRecord } from '@/types';
import { entries, getParams } from '@/utils';
import { API, APIResponse, Responses, response } from '@/utils/actions';
import { templateRegistry } from '@/data/template';

type PagesResponse = APIResponse<
  Responses['success'] & {
    data: TemplateRegistryRecord<any>;
    meta: {
      page: number;
      totalPages: number;
      totalResults: number;
    };
  }
>;

const GET = API<PagesResponse>(({ nextUrl: { searchParams } }) => {
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
      type: 'page',
      locale: 'locale'
    },
    {
      page: 1,
      perPage: 5,
      isSelected: false,
      type: undefined,
      locale: DEFAULT_LOCALE.value
    }
  );

const resolveResults = (params: ReturnType<typeof resolveParams>) => {
  let resultsAux = entries(templateRegistry);

  if (params.type !== undefined) {
    const targetParam = params.type;
    resultsAux = resultsAux.filter(([_, d]) => );
  }

  if (params.isSelected) {
    resultsAux = resultsAux.filter(
      ([_, d]) => d.type === 'default' && d.isSelected
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
export type { PagesResponse };
