'use client';

import { ReactNode } from 'react';

import { useCatalogContext } from '@/hooks/contexts';

type CatalogListItemsMoleculeProps<T> = {
  children?: (value: T, index: number, array: T[]) => ReactNode;
};

const CatalogListItemsMolecule = <T,>({
  children
}: CatalogListItemsMoleculeProps<T>) => {
  const { items } = useCatalogContext<T>();

  return children && items.map(children);
};

export default CatalogListItemsMolecule;
export type { CatalogListItemsMoleculeProps };
