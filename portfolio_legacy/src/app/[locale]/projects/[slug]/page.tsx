import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

import { ProjectTemplate } from '@/components/templates';
import { Page, ProjectPage } from '@/types';
import { isLocale, keys } from '@/utils';
import { pagesApi, projectsApi } from '@/utils/actions';

import { LayoutParams } from '../../layout';

type SingleProjectPageOwnProps = {};

type SingleProjectPageParams = {
  params: Promise<{ slug: string }> & LayoutParams['params'];
};

type SingleProjectPageProps = SingleProjectPageOwnProps &
  SingleProjectPageParams;

const isValidPage = (page: Page): page is ProjectPage =>
  page.type === 'project';

const SingleProjectPage = async ({ params }: SingleProjectPageProps) => {
  const { locale, slug } = await params;

  setRequestLocale(locale);

  if (!isLocale(locale)) notFound();

  const res = await pagesApi.getProject({ slug, locale });

  if (!res.ok || !isValidPage(res.data)) return notFound();

  const page = res.data;

  return (
    <ProjectTemplate
      hero={page.hero}
      blocks={page.blocks}
    />
  );
};

const generateMetadata = async ({ params }: SingleProjectPageParams) => {
  const { locale, slug } = await params;

  if (!isLocale(locale)) notFound();

  const res = await pagesApi.getProject({ slug, locale });

  if (!res.ok) return notFound();

  const { metadata } = res.data;

  return metadata;
};

const generateStaticParams = async ({
  params: { locale }
}: {
  params: { locale: string }; // Has to be string to avoid next error with locale enums
}) => {
  if (!isLocale(locale)) return [];

  const res = await projectsApi.get({ locale, isSelected: true });

  const projects = res.ok ? res.data : undefined;

  return keys(projects).map((slug) => ({ slug }));
};

export default SingleProjectPage;
export { generateMetadata, generateStaticParams };
export type { SingleProjectPageProps, SingleProjectPageParams };
