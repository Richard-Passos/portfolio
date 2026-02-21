'use client';

import { ComponentProps, useMemo } from 'react';

import { CatalogContext } from '@/contexts';
import {
  CatalogContextInitialState,
  catalogContextDefaultValue
} from '@/contexts/Catalog';
import { useId } from '@/hooks';
import { keys } from '@/utils';

type CatalogProviderOwnProps<T> = {
  items: Record<string, T>;
  url?: string;
};

type CatalogProviderProps<T> = CatalogProviderOwnProps<T> &
  Omit<
    ComponentProps<typeof CatalogContext.Provider>,
    keyof CatalogProviderOwnProps<T> | 'value'
  >;

const CatalogProvider = <T,>({
  items,
  url = '',
  ...props
}: CatalogProviderProps<T>) => {
  const id = useId();

  const totalResults = keys(items).length,
    isEmpty = totalResults === 0;

  const value: CatalogContextInitialState<T> = useMemo(
    () => ({
      ...catalogContextDefaultValue,
      id,
      items,
      totalResults,
      isEmpty
    }),
    [id, items, totalResults, isEmpty]
  );

  return (
    <CatalogContext.Provider
      value={value}
      {...props}
    />
  );
};

export default CatalogProvider;
export type { CatalogProviderProps };
