'use client';

import { useSearchParams } from 'next/navigation';
import { ComponentProps, useCallback, useMemo } from 'react';

import { Slot, SlotAsChildProps } from '@/components/misc/Slot';
import { useSetSearchParams } from '@/hooks';
import { MergeProps } from '@/types';
import { normId } from '@/utils';

type CatalogFilterProps = SlotAsChildProps<
  MergeProps<
    {
      query: { name: string; value: string };
    },
    ComponentProps<'button'>
  >
>;

const CatalogFilter = ({
  asChild,
  query,
  onChange,
  ...props
}: CatalogFilterProps) => {
  const searchParams = useSearchParams(),
    setSearchParams = useSetSearchParams();

  const { name, value, isActive } = useMemo(() => {
    const name = normId(query.name),
      value = query.value;

    return {
      name,
      value,
      isActive: searchParams.get(name) === value
    };
  }, [query, searchParams]);

  const handleChange = useCallback(
    (ev: any) => {
      setSearchParams([{ key: name, value: isActive ? undefined : value }]);

      onChange?.(ev);
    },
    [setSearchParams, name, isActive, value, onChange]
  );

  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-active={isActive ? true : undefined}
      onChange={handleChange}
      {...props}
    />
  );
};

export { CatalogFilter };
export type { CatalogFilterProps };
