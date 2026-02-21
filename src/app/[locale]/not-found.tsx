import { setRequestLocale } from 'next-intl/server';

import { ErrorTemplate } from '@/components/templates';
import { defaultPages } from '@/constants';
import { ErrorPage, Page } from '@/types';
import { getLocale, pagesApi } from '@/utils/actions';

const isValidPage = (page: Page): page is ErrorPage => page.type === 'error';

const NotFoundPage = async () => {
  const locale = await getLocale();

  setRequestLocale(locale);

  const res = await pagesApi.getOne({
    slug: defaultPages.notFound,
    locale
  });

  if (!res.ok || !isValidPage(res.data)) return undefined;

  const page = res.data;

  return (
    <ErrorTemplate
      blocks={page.blocks}
      hero={page.hero}
    />
  );
};

const generateMetadata = async () => {
  const locale = await getLocale();

  const res = await pagesApi.getOne({
    slug: defaultPages.notFound,
    locale
  });

  if (!res.ok || !isValidPage(res.data)) return {};

  const { metadata } = res.data;

  return metadata;
};

export default NotFoundPage;
export { generateMetadata };
