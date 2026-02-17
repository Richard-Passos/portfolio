'use client';

import { ReactNode } from 'react';

import { useCatalogContext } from '@/hooks/contexts';
import { entries } from '@/utils';

type CatalogListItemsMoleculeProps<T> = {
  children?: (value: [string, T], index: number) => ReactNode;
};

const CatalogListItemsMolecule = <T,>({
  children
}: CatalogListItemsMoleculeProps<T>) => {
  const { items } = useCatalogContext<T>();

  return children && entries(items).map(children);
};

export default CatalogListItemsMolecule;
export type { CatalogListItemsMoleculeProps };
