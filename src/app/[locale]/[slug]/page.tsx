import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

import { LegalTemplate, PageTemplate } from '@/components/templates';
import { DefaultPage, LegalPage, Page as TPage } from '@/types';
import { isLocale, keys } from '@/utils';
import { pagesApi } from '@/utils/actions';

import { LayoutParams } from '../layout';

type PageParams = {
  params: Promise<{ slug: string }> & LayoutParams['params'];
};

type PageProps = PageParams;

const isValidPage = (page: TPage): page is DefaultPage | LegalPage =>
  !page.type || page.type === 'default' || page.type === 'legal';

const Page = async ({ params }: PageProps) => {
  const { locale, slug } = await params;

  setRequestLocale(locale);

  if (!isLocale(locale)) notFound();

  const res = await pagesApi.getOne({ slug, locale });

  if (!res.ok || !isValidPage(res.data)) return notFound();

  const page = res.data;

  if (page.type === 'legal')
    return (
      <LegalTemplate
        theme={page.theme}
        hero={page.hero}
        blocks={page.blocks}
        footer={page.footer}
      />
    );

  return (
    <PageTemplate
      blocks={page.blocks}
      hero={page.hero}
    />
  );
};

const generateMetadata = async ({ params }: PageParams) => {
  const { locale, slug } = await params;

  if (!isLocale(locale)) notFound();

  const res = await pagesApi.getOne({ slug, locale });

  if (!res.ok) return notFound();

  const page = res.data;

  if (!isValidPage(page)) return notFound();

  return page.metadata;
};

const generateStaticParams = async ({
  params: { locale }
}: {
  params: { locale: string }; // Has to be string to avoid next error with locale enums
}) => {
  if (!isLocale(locale)) return [];

  const res = await pagesApi.get({ locale });

  const pages = res.ok ? res.data : undefined;

  return keys(pages).map((slug) => ({ slug }));
};

export default Page;
export { generateMetadata, generateStaticParams };
export type { PageProps, PageParams };
