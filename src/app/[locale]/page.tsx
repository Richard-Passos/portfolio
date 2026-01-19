import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

import { PageTemplate } from '@/components/templates';
import { defaultPages } from '@/constants';
import { Page } from '@/types';
import { isLocale } from '@/utils';
import { pagesApi } from '@/utils/actions';

import { LayoutParams } from './layout';

type HomePageOwnProps = {};

type HomePageParams = LayoutParams;

type HomePageProps = HomePageOwnProps & HomePageParams;

const HomePage = async ({ params }: HomePageProps) => {
  let { locale } = await params;

  setRequestLocale(locale);

  if (!isLocale(locale)) notFound();

  const res = await pagesApi.getOne<Page>({ slug: defaultPages.home, locale });

  if (!res.ok) return notFound();

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
