'use client';

import { ComponentProps, useMemo } from 'react';

import { CatalogContext, CatalogContextState } from '@/contexts';
import { MergeProps } from '@/types';
import { keys } from '@/utils';

type CatalogProviderProps<T> = MergeProps<
  {
    items: Record<string, T>;
  },
  ComponentProps<typeof CatalogContext.Provider>,
  'value'
>;

const CatalogProvider = <T,>({ items, ...props }: CatalogProviderProps<T>) => {
  const value: CatalogContextState<T> = useMemo(() => {
    const totalResults = keys(items).length,
      isEmpty = totalResults === 0;

    return {
      items,
      totalResults,
      isEmpty,
      page: 1,
      perPage: 10,
      totalPages: 1,
      isLoading: false,
      isLastPage: false
    };
  }, [items]);

  return (
    <CatalogContext.Provider
      value={value}
      {...props}
    />
  );
};

export { CatalogProvider };
export type { CatalogProviderProps };
