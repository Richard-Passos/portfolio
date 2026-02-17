'use client';

import { createContext } from 'react';

type CatalogContextInitialState<T> = {
  id: string;
  items: Record<string, T>;
  page: number;
  perPage: number;
  totalPages: number;
  totalResults: number;
  isLoading: boolean;
  isLastPage: boolean;
  isEmpty: boolean;
};

const catalogContextDefaultValue: CatalogContextInitialState<any> = {
  id: '',
  items: {},
  page: 1,
  perPage: 10,
  totalPages: 1,
  totalResults: 0,
  isLoading: false,
  isLastPage: false,
  isEmpty: false
};

const CatalogContext = createContext(catalogContextDefaultValue);

export default CatalogContext;
export { catalogContextDefaultValue };
export type { CatalogContextInitialState };
