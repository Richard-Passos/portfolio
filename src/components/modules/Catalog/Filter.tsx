'use client';

import { useSearchParams } from 'next/navigation';
import { ComponentProps, useCallback } from 'react';

import { Slot, SlotAsChildProps } from '@/components/misc/Slot';
import { useSetSearchParams } from '@/hooks/useSetSearchParams';
import { MergeProps } from '@/types/MergeProps';

export type CatalogFilterProps = SlotAsChildProps<
  MergeProps<
    {
      query: { name: string; value: string };
    },
    ComponentProps<'button'>
  >
>;

export const CatalogFilter = ({ asChild, query, onChange, ...props }: CatalogFilterProps) => {
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

  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-active={isActive ? true : undefined}
      onChange={handleChange}
      {...props}
    />
  );
};
