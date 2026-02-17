'use client';

import { useLocale } from 'next-intl';
import { use, useEffect } from 'react';

import { ErrorTemplate } from '@/components/templates';
import { defaultPages } from '@/constants';
import { Locale, Page, ErrorPage as TErrorPage } from '@/types';
import { pagesApi } from '@/utils/actions';

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

const isValidPage = (page: Page): page is TErrorPage => page.type !== 'error';

const ErrorPage = ({ error, reset }: ErrorPageProps) => {
  const locale = useLocale() as Locale['value'],
    page = use(
      pagesApi
        .getOne({
          slug: defaultPages.error,
          locale
        })
        .then((res) => {
          if (!res.ok || !isValidPage(res.data)) return undefined;

          const page = res.data;
          if (page.hero?.data.actions?.primary?.onClick)
            page.hero.data.actions.primary.onClick = reset;

          return page;
        })
    );

  useEffect(() => {
    console.error(error);
  }, [error]);

  if (page === undefined) return undefined;

  return (
    <ErrorTemplate
      blocks={page.blocks}
      hero={page.hero}
    />
  );
};

export default ErrorPage;
export type { ErrorPageProps };
