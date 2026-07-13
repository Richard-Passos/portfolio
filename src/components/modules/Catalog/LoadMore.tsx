'use client';

import { useCallback } from 'react';

import { SlotElement, SlotElementProps } from '@/components/misc/Slot/Element';
import { useSetSearchParams } from '@/hooks/useSetSearchParams';
import { useCatalogContext } from '@/contexts/Catalog';

export type CatalogLoadMoreProps = SlotElementProps<'button'>;

export const CatalogLoadMore = <T,>({ onClick, ...props }: CatalogLoadMoreProps) => {
  const { page, isLastPage } = useCatalogContext<T>(),
    setSearchParams = useSetSearchParams();

  const handleClick = useCallback(
    (ev: any) => {
      setSearchParams([{ key: 'page', value: `${page + 1}` }]);

      onClick?.(ev);
    },
    [setSearchParams, page, onClick]
  );

  return isLastPage ? null : (
    <SlotElement
      tag='button'
      onClick={handleClick}
      {...props}
    />
  );
};
