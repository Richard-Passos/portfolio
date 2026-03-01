'use server';

import { AUTH_TOKEN, BASE_URL } from '@/constants';

const TAGS = {
  pages: 'pages',
  career: 'career',
  cookiesConsent: 'cookies-consent',
  footer: 'footer',
  header: 'header',
  personal: 'personal',
  projects: 'projects',
  skills: 'skills',
  values: 'values'
} as const;

type Tags = typeof TAGS;

type RequestConfig = Omit<RequestInit, 'next'> & {
  tags?: Tags[keyof Tags][];
  next?: Omit<NonNullable<RequestInit['next']>, 'tags'>;
};

const request = async <TResponse>(
  url: string,
  config?: RequestConfig
): Promise<TResponse> => {
  const targetUrl = url.startsWith('/') ? `${BASE_URL}${url}` : url,
    { tags, ...rest } = config ?? {};

  const response = await fetch(targetUrl, {
    cache: 'force-cache',
    ...rest,
    headers: {
      Authorization: `Bearer ${AUTH_TOKEN}`,
      ...rest?.headers
    },
    next: {
      ...rest?.next,
      tags
    }
  });

  return (await response.json()) as TResponse;
};

export { request, TAGS };
export type { RequestConfig };
