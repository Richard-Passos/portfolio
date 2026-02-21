'use server';

import { baseUrl } from '@/constants';

const request = async <TResponse>(
  url: string,
  config?: RequestInit
): Promise<TResponse> => {
  const authToken = process.env.AUTH_TOKEN;

  if (authToken === undefined)
    throw new Error('AUTH_TOKEN is not defined in environment variables');

  const targetUrl = url.startsWith('/') ? `${baseUrl}${url}` : url;

  const response = await fetch(targetUrl, {
    cache: 'force-cache',
    ...config,
    headers: {
      Authorization: `Bearer ${authToken}`,
      ...config?.headers
    }
  });

  return (await response.json()) as TResponse;
};

export default request;
