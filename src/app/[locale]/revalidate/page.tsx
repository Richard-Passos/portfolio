import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

import { PageTemplate } from '@/components/templates';
import { defaultPages } from '@/constants';
import { DefaultPage, Page } from '@/types';
import { isLocale } from '@/utils';
import { pagesApi } from '@/utils/actions';

import { LayoutParams } from '../layout';

type RevalidatePageParams = {
  params: LayoutParams['params'];
};

type RevalidatePageProps = RevalidatePageParams;

const isValidPage = (page: Page): page is DefaultPage =>
  !page.type || page.type === 'default';

const RevalidatePage = async ({ params }: RevalidatePageProps) => {
  const { locale } = await params;

  setRequestLocale(locale);

  if (!isLocale(locale)) notFound();

  const res = await pagesApi.getOne(
    { slug: defaultPages.revalidate, locale },
    { cache: 'no-cache' }
  );

  if (!res.ok || !isValidPage(res.data)) return notFound();

  const page = res.data;

  return (
    <PageTemplate
      hero={page.hero}
      blocks={page.blocks}
    />
  );
};

const generateMetadata = async ({ params }: RevalidatePageParams) => {
  const { locale } = await params;

  if (!isLocale(locale)) notFound();

  const res = await pagesApi.getOne(
    { slug: defaultPages.revalidate, locale },
    { cache: 'no-cache' }
  );

  if (!res.ok || !isValidPage(res.data)) return notFound();

  return res.data.metadata;
};

export default RevalidatePage;
export { generateMetadata };
export type { RevalidatePageProps, RevalidatePageParams };
