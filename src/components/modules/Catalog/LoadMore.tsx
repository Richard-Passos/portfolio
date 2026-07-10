'use client';

import { ComponentProps, useCallback } from 'react';

import { Slot, SlotAsChildProps } from '@/components/misc/Slot';
import { useSetSearchParams } from '@/hooks/useSetSearchParams';
import { useCatalogContext } from '@/contexts/Catalog';

export type CatalogLoadMoreProps = SlotAsChildProps<ComponentProps<'button'>>;

export const CatalogLoadMore = <T,>({ asChild, onClick, ...props }: CatalogLoadMoreProps) => {
  const { page, isLastPage } = useCatalogContext<T>(),
    setSearchParams = useSetSearchParams();

  const handleClick = useCallback(
    (ev: any) => {
      setSearchParams([{ key: 'page', value: `${page + 1}` }]);

      onClick?.(ev);
    },
    [setSearchParams, page, onClick]
  );

  const Comp = asChild ? Slot : 'button';

  return isLastPage ? null : (
    <Comp
      onClick={handleClick}
      {...props}
    />
  );
};
