'use client';

import { useSearchParams } from 'next/navigation';

import Slot, { SlotProps } from '@/components/atoms/Slot';
import { useSetSearchParams } from '@/hooks';
import { normId } from '@/utils';

type CatalogButtonFilterMoleculeOwnProps = {
  query: { name: string; value: string };
};

type CatalogButtonFilterMoleculeProps = CatalogButtonFilterMoleculeOwnProps &
  Omit<SlotProps, keyof CatalogButtonFilterMoleculeOwnProps>;

const CatalogButtonFilterMolecule = ({
  query,
  ...props
}: CatalogButtonFilterMoleculeProps) => {
  const searchParams = useSearchParams(),
    setSearchParams = useSetSearchParams();

  const { name, value } = { ...query, name: normId(query.name) };

  const isActive = searchParams.get(name) === value;

  return (
    <Slot
      data-state={isActive ? 'active' : 'inactive'}
      {...props}
      onClick={(ev) => {
        setSearchParams([{ key: name, value: !isActive ? value : '' }]);

        props.onClick?.(ev);
      }}
    />
  );
};

export default CatalogButtonFilterMolecule;
export type { CatalogButtonFilterMoleculeProps };
