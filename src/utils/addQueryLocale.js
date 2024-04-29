import { getLocale } from 'next-intl/server';

const addQueryLocale = async (query) => {
  query = query?.slice(1) ?? '';

  const locale = await getLocale();

  const querys = query.split('&');

  query = !querys.find((w) => /(^locale=)/.test(w))
    ? [...querys, `locale=${locale}`].filter((w) => w).join('&')
    : query;

  return `?${query}`;
};

export default addQueryLocale;
