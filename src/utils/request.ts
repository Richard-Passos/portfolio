import { baseUrl } from '@/constants';

const request = async <TResponse>(
  url: string,
  config?: RequestInit
): Promise<TResponse> => {
  url = url.startsWith('/') ? `${baseUrl}${url}` : url;

  const response = await fetch(url, { cache: 'no-store', ...config });

  return (await response.json()) as TResponse;
};

export default request;
