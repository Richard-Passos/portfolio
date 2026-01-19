import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

import { LegalTemplate, PageTemplate } from '@/components/templates';
import { defaultPages } from '@/constants';
import { LegalPage, Pages, Page as TPage } from '@/types';
import { isLocale, normId, values } from '@/utils';
import { pagesApi } from '@/utils/actions';

import { LayoutParams } from '../layout';

type PageOwnProps = {};

type PageParams = {
  params: Promise<{ slug: string }> & LayoutParams['params'];
};

type PageProps = PageOwnProps & PageParams;

const isValidPage = (slug: string, page: Pages): page is TPage | LegalPage => {
  if (values(defaultPages).includes(slug)) return false;

  if (!!page.type && page.type !== 'page' && page.type !== 'legal')
    return false;

  return true;
};

const Page = async ({ params }: PageProps) => {
  const { locale, slug } = await params;

  setRequestLocale(locale);

  if (!isLocale(locale)) notFound();

  const res = await pagesApi.getOne({ slug: normId(slug), locale });

  if (!res.ok) return notFound();

  const page = res.data;

  if (!isValidPage(slug, page)) return notFound();

  if (page.type === 'legal') return <LegalTemplate blocks={page.blocks} />;

  return (
    <PageTemplate
      blocks={page.blocks}
      hero={page.hero}
    />
  );
};

const generateMetadata = async ({ params }: PageParams): Promise<Metadata> => {
  const { locale, slug } = await params;

  if (!isLocale(locale)) notFound();

  const res = await pagesApi.getOne({ slug: normId(slug), locale });

  if (!res.ok) return notFound();

  const page = res.data;

  if (!isValidPage(slug, page)) return notFound();

  return page.metadata;
};

const generateStaticParams = async ({
  params: { locale }
}: {
  params: { locale: string }; // Has to be string to avoid next error with locale enums
}) => {
  if (!isLocale(locale)) return [];

  const res = await pagesApi.get({ locale });

  const pages = res.ok ? res.data : [];

  return pages.map((p) => ({ slug: p.slug }));
};

export default Page;
export { generateMetadata, generateStaticParams };
export type { PageProps, PageParams };
