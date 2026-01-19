'use client';

import Slot, { SlotProps } from '@/components/atoms/Slot';
import { useSetSearchParams } from '@/hooks';
import { useCatalogContext } from '@/hooks/contexts';

type CatalogLoadMoreMoleculeOwnProps = {};

type CatalogLoadMoreMoleculeProps = CatalogLoadMoreMoleculeOwnProps &
  Omit<SlotProps, keyof CatalogLoadMoreMoleculeOwnProps>;

const CatalogLoadMoreMolecule = <T,>(props: CatalogLoadMoreMoleculeProps) => {
  const { page, isLastPage } = useCatalogContext<T>(),
    setSearchParams = useSetSearchParams();

  if (isLastPage) return null;

  return (
    <Slot
      {...props}
      onClick={async (ev) => {
        setSearchParams([{ key: 'page', value: `${page + 1}` }]);

        props.onClick?.(ev);
      }}
    />
  );
};

export default CatalogLoadMoreMolecule;
export type { CatalogLoadMoreMoleculeProps };
