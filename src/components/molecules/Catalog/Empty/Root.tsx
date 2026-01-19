'use client';

import { createPolymorphicComponent } from '@mantine/core';

import Box, { BoxProps } from '@/components/atoms/Box';
import { useCatalogContext } from '@/hooks/contexts';

type CatalogEmptyMoleculeOwnProps = {};

type CatalogEmptyMoleculeProps = CatalogEmptyMoleculeOwnProps &
  Omit<BoxProps, keyof CatalogEmptyMoleculeOwnProps>;

const CatalogEmptyMolecule = <T,>(props: CatalogEmptyMoleculeProps) => {
  const { isEmpty } = useCatalogContext<T>();

  if (!isEmpty) return null;

  return <Box {...props} />;
};

export default createPolymorphicComponent<'div', CatalogEmptyMoleculeProps>(
  CatalogEmptyMolecule
);
export type { CatalogEmptyMoleculeProps };
