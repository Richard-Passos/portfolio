import { Metadata } from 'next';
import { unstable_setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

import { pagesApi } from '@/api';
import { PageTemplate } from '@/components/templates';

import { LayoutParams } from '../layout';

type PageOwnProps = {};

type PageParams = {
  params: { slug: string } & LayoutParams['params'];
};

type PageProps = PageOwnProps & PageParams;

const Page = async ({ params: { slug, locale } }: PageProps) => {
  unstable_setRequestLocale(locale);

  const res = await pagesApi.getOne({ slug, locale });

  if (!res.ok) return notFound();

  const page = res.data;

  return (
    <PageTemplate
      blocks={page.blocks}
      hero={page.hero}
    />
  );
};

const generateMetadata = async ({
  params: { slug, locale }
}: PageParams): Promise<Metadata> => {
  const res = await pagesApi.getOne({ slug, locale });

  if (!res.ok) return notFound();

  const { metadata } = res.data;

  return metadata;
};

const generateStaticParams = async ({ params: { locale } }: LayoutParams) => {
  const res = await pagesApi.get({ locale });

  const pages = res.ok ? res.data : [];

  return pages.map((p) => ({ slug: p.slug }));
};

export default Page;
export { generateMetadata, generateStaticParams };
export type { PageProps, PageParams };