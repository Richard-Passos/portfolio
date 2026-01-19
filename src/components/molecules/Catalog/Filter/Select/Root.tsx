'use client';

import { useSearchParams } from 'next/navigation';

import Select, { SelectProps } from '@/components/atoms/Select';
import { useSetSearchParams } from '@/hooks';
import { normId } from '@/utils';

type CatalogSelectFilterMoleculeOwnProps = {
  query: { name: string; value: string };
};

type CatalogSelectFilterMoleculeProps = CatalogSelectFilterMoleculeOwnProps &
  Omit<SelectProps, keyof CatalogSelectFilterMoleculeOwnProps>;

const CatalogSelectFilterMolecule = ({
  query,
  ...props
}: CatalogSelectFilterMoleculeProps) => {
  const searchParams = useSearchParams(),
    setSearchParams = useSetSearchParams();

  const { name, value } = { ...query, name: normId(query.name) };

  const isActive = searchParams.get(name) === value;

  return (
    <Select
      data-state={isActive ? 'active' : 'inactive'}
      {...props}
      onClick={(ev) => {
        setSearchParams([{ key: name, value: !isActive ? value : '' }]);

        props.onClick?.(ev);
      }}
    />
  );
};

export default CatalogSelectFilterMolecule;
export type { CatalogSelectFilterMoleculeProps };
