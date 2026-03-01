import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

import { PageTemplate } from '@/components/templates';
import { DefaultPage, Page as TPage } from '@/types';
import { isLocale, keys } from '@/utils';
import { pagesApi } from '@/utils/actions';

import { LayoutParams } from '../layout';

type PageParams = {
  params: Promise<{ slug: string }> & LayoutParams['params'];
};

type PageProps = PageParams;

const isValidPage = (page: TPage): page is DefaultPage =>
  !page.type || page.type === 'default';

const Page = async ({ params }: PageProps) => {
  const { locale, slug } = await params;

  setRequestLocale(locale);

  if (!isLocale(locale)) notFound();

  const res = await pagesApi.getOne({ slug, locale });

  if (!res.ok || !isValidPage(res.data)) return notFound();

  const page = res.data;

  return (
    <PageTemplate
      hero={page.hero}
      blocks={page.blocks}
    />
  );
};

const generateMetadata = async ({ params }: PageParams) => {
  const { locale, slug } = await params;

  if (!isLocale(locale)) notFound();

  const res = await pagesApi.getOne({ slug, locale });

  if (!res.ok || !isValidPage(res.data)) return notFound();

  return res.data.metadata;
};

const generateStaticParams = async ({
  params: { locale }
}: {
  params: { locale: string }; // Has to be string to avoid next error with locale enums
}) => {
  if (!isLocale(locale)) return [];

  const { data } = await pagesApi.get({ locale, type: 'default' });

  return keys(data).map((slug) => ({ slug }));
};

export default Page;
export { generateMetadata, generateStaticParams };
export type { PageProps, PageParams };
