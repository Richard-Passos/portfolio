'use client';

import { type ComponentProps, createContext, useContext, useMemo } from 'react';

import type { MergeProps } from '@/types/MergeProps';

export type CatalogContextState<T> = {
  items: T[];
  page: number;
  perPage: number;
  totalPages: number;
  totalResults: number;
  isLoading: boolean;
  isLastPage: boolean;
  isEmpty: boolean;
};

const CatalogContext = createContext<CatalogContextState<unknown> | null>(null);

export type CatalogProviderProps<T> = MergeProps<
  {
    items: T[];
    perPage?: number;
  },
  ComponentProps<typeof CatalogContext.Provider>,
  'value'
>;

export const CatalogProvider = <T,>({ items, perPage = 10, ...props }: CatalogProviderProps<T>) => {
  const value = useMemo<CatalogContextState<T>>(() => {
    const totalResults = items.length;
    const totalPages = Math.max(1, Math.ceil(totalResults / perPage));

    return {
      items,
      page: 1,
      perPage,
      totalResults,
      totalPages,
      isLoading: false,
      isEmpty: totalResults === 0,
      isLastPage: 1 >= totalPages
    };
  }, [items, perPage]);

  return (
    <CatalogContext.Provider
      value={value}
      {...props}
    />
  );
};

export const useCatalogContext = <T,>() => {
  const context = useContext(CatalogContext);

  if (!context) {
    throw new Error('useCatalogContext must be used within a CatalogProvider.');
  }

  return context as CatalogContextState<T>;
};
