import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

import { SingleProjectTemplate } from '@/components/templates';
import { entries, isLocale, normId } from '@/utils';
import { pagesApi, projectsApi } from '@/utils/actions';

import { LayoutParams } from '../../layout';

type SingleProjectPageOwnProps = {};

type SingleProjectPageParams = {
  params: Promise<{ slug: string }> & LayoutParams['params'];
};

type SingleProjectPageProps = SingleProjectPageOwnProps &
  SingleProjectPageParams;

const SingleProjectPage = async ({ params }: SingleProjectPageProps) => {
  const { locale, slug } = await params;

  setRequestLocale(locale);

  if (!isLocale(locale)) notFound();

  const res = await pagesApi.getSingleProject({ slug: normId(slug), locale });

  if (!res.ok) return notFound();

  const page = res.data;

  return (
    <SingleProjectTemplate
      blocks={
        entries(page.blocks).map(([key, value]) => ({
          id: normId(key),
          type: key,
          ...value
        })) as any
      }
      hero={page.hero}
    />
  );
};

const generateMetadata = async ({
  params
}: SingleProjectPageParams): Promise<Metadata> => {
  const { locale, slug } = await params;

  if (!isLocale(locale)) notFound();

  const res = await pagesApi.getSingleProject({ slug: normId(slug), locale });

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

  const projects = res.ok ? res.data : [];

  return projects.map((d) => ({ slug: d.slug }));
};

export default SingleProjectPage;
export { generateMetadata, generateStaticParams };
export type { SingleProjectPageProps, SingleProjectPageParams };
