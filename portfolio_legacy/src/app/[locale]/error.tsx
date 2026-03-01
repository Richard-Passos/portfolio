'use client';

import { useLocale } from 'next-intl';
import { useEffect, useState } from 'react';

import { ErrorTemplate } from '@/components/templates';
import { defaultPages } from '@/constants';
import { Locale, Page, ErrorPage as TErrorPage } from '@/types';
import { pagesApi } from '@/utils/actions';

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

const isValidPage = (page: Page): page is TErrorPage => page.type === 'error';

const ErrorPage = ({ error, reset }: ErrorPageProps) => {
  const locale = useLocale() as Locale,
    [page, setPage] = useState<TErrorPage | null>(null);

  useEffect(() => {
    pagesApi
      .getOne({
        slug: defaultPages.error,
        locale
      })
      .then((res) => {
        if (!res.ok || !isValidPage(res.data)) return;

        if (res.data.hero?.data.actions?.primary)
          res.data.hero.data.actions.primary.onClick = reset;

        setPage(res.data);
      });
  }, [locale, reset]);

  useEffect(() => {
    console.error(error);
  }, [error]);

  if (page === null) return null;

  return (
    <ErrorTemplate
      blocks={page.blocks}
      hero={page.hero}
    />
  );
};

export default ErrorPage;
export type { ErrorPageProps };
