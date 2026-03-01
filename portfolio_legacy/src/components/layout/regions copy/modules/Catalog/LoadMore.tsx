'use client';

import { ComponentProps, useCallback } from 'react';

import { Slot, SlotAsChildProps } from '@/components/misc/Slot';
import { useSetSearchParams } from '@/hooks';
import { useCatalogContext } from '@/hooks/contexts';

type CatalogLoadMoreProps = SlotAsChildProps<ComponentProps<'button'>>;

const CatalogLoadMore = <T,>({
  asChild,
  onClick,
  ...props
}: CatalogLoadMoreProps) => {
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

export { CatalogLoadMore };
export type { CatalogLoadMoreProps };
