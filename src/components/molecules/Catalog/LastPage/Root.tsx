'use client';

import { createPolymorphicComponent } from '@mantine/core';

import Box, { BoxProps } from '@/components/atoms/Box';
import { useCatalogContext } from '@/hooks/contexts';

type CatalogLastPageMoleculeOwnProps = {};

type CatalogLastPageMoleculeProps = CatalogLastPageMoleculeOwnProps &
  Omit<BoxProps, keyof CatalogLastPageMoleculeOwnProps>;

const CatalogLastPageMolecule = <T,>(props: CatalogLastPageMoleculeProps) => {
  const { isLastPage } = useCatalogContext<T>();

  if (!isLastPage) return null;

  return <Box {...props} />;
};

export default createPolymorphicComponent<'div', CatalogLastPageMoleculeProps>(
  CatalogLastPageMolecule
);
export type { CatalogLastPageMoleculeProps };
