import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

import { LegalTemplate } from '@/components/templates';
import { Page, LegalPage as TLegalPage } from '@/types';
import { isLocale, keys } from '@/utils';
import { pagesApi } from '@/utils/actions';

import { LayoutParams } from '../../layout';

type LegalPageParams = {
  params: Promise<{ slug: string }> & LayoutParams['params'];
};

type LegalPageProps = LegalPageParams;

const isValidLegalPage = (page: Page): page is TLegalPage =>
  page.type === 'legal';

const LegalPage = async ({ params }: LegalPageProps) => {
  const { locale, slug } = await params;

  setRequestLocale(locale);

  if (!isLocale(locale)) notFound();

  const res = await pagesApi.getOne({ slug, locale });

  if (!res.ok || !isValidLegalPage(res.data)) return notFound();

  const page = res.data;

  return (
    <LegalTemplate
      hero={page.hero}
      blocks={page.blocks}
      footer={page.footer}
    />
  );
};

const generateMetadata = async ({ params }: LegalPageParams) => {
  const { locale, slug } = await params;

  if (!isLocale(locale)) notFound();

  const res = await pagesApi.getOne({ slug, locale });

  if (!res.ok || !isValidLegalPage(res.data)) return notFound();

  return res.data.metadata;
};

const generateStaticParams = async ({
  params: { locale }
}: {
  params: { locale: string }; // Has to be string to avoid next error with locale enums
}) => {
  if (!isLocale(locale)) return [];

  const res = await pagesApi.get({ locale, type: 'legal' }),
    pages = res.ok ? res.data : undefined;

  return keys(pages).map((slug) => ({ slug }));
};

export default LegalPage;
export { generateMetadata, generateStaticParams };
export type { LegalPageProps, LegalPageParams };
