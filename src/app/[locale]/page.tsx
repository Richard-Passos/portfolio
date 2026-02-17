import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

import { PageTemplate } from '@/components/templates';
import { defaultPages } from '@/constants';
import { DefaultPage, Page } from '@/types';
import { isLocale } from '@/utils';
import { pagesApi } from '@/utils/actions';

import { LayoutParams } from './layout';

type HomePageParams = LayoutParams;

type HomePageProps = HomePageParams;

const isValidPage = (page: Page): page is DefaultPage =>
  !page.type || page.type === 'default';

const HomePage = async ({ params }: HomePageProps) => {
  const { locale } = await params;

  setRequestLocale(locale);

  if (!isLocale(locale)) notFound();

  const res = await pagesApi.getOne({ slug: defaultPages.home, locale });

  if (!res.ok || !isValidPage(res.data)) return notFound();

  const page = res.data;

  return (
    <PageTemplate
      blocks={page.blocks}
      hero={page.hero}
    />
  );
};

export default HomePage;
export type { HomePageProps, HomePageParams };
