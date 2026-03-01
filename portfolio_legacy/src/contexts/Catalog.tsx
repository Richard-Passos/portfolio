'use client';

import { createContext } from 'react';

type CatalogContextState<T> = {
  items: Record<string, T>;
  page: number;
  perPage: number;
  totalPages: number;
  totalResults: number;
  isLoading: boolean;
  isLastPage: boolean;
  isEmpty: boolean;
};

const CatalogContext = createContext<CatalogContextState<any> | undefined>(
  undefined
);

export { CatalogContext };
export type { CatalogContextState };
