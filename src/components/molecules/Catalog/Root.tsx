import { Slot } from '@radix-ui/react-slot';
import { ComponentProps } from 'react';

import CatalogProvider, { CatalogProviderProps } from '@/Providers/Catalog';
import { AsChildProps } from '@/components/atoms/Slot';

type CatalogMoleculeOwnProps = {};

type CatalogMoleculeProps = AsChildProps<
  CatalogMoleculeOwnProps &
    Omit<ComponentProps<'section'>, keyof CatalogMoleculeOwnProps>
>;

const CatalogMolecule = ({ asChild, ...props }: CatalogMoleculeProps) => {
  if (asChild) return <Slot {...props} />;

  return <section {...(props as ComponentProps<'section'>)} />;
};

type CatalogMoleculeWithProviderProps<T> = CatalogProviderProps<T> &
  CatalogMoleculeProps;

const CatalogMoleculeWithProvider = <T,>({
  items,
  url,
  ...props
}: CatalogMoleculeWithProviderProps<T>) => {
  return (
    <CatalogProvider
      items={items}
      url={url}
    >
      <CatalogMolecule {...props} />
    </CatalogProvider>
  );
};

export default CatalogMoleculeWithProvider;
export type { CatalogMoleculeProps, CatalogMoleculeWithProvider };
