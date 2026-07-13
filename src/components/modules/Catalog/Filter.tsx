'use client';

import { useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

import { SlotElement, SlotElementProps } from '@/components/misc/Slot/Element';
import { useSetSearchParams } from '@/hooks/useSetSearchParams';
import { MergeProps } from '@/types/MergeProps';

export type CatalogFilterProps = MergeProps<
  {
    query: { name: string; value: string };
  },
  SlotElementProps<'button'>
>;

export const CatalogFilter = ({ query, onChange, ...props }: CatalogFilterProps) => {
  const searchParams = useSearchParams();
  const setSearchParams = useSetSearchParams();

  const isActive = searchParams.get(query.name) === query.value;

  const handleChange = useCallback(
    (ev: any) => {
      setSearchParams([{ key: query.name, value: isActive ? undefined : query.value }]);

      onChange?.(ev);
    },
    [setSearchParams, query, isActive, onChange]
  );

  return (
    <SlotElement
      tag='button'
      data-active={isActive ? true : undefined}
      onChange={handleChange}
      {...props}
    />
  );
};
