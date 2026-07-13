'use client';

import { SlotElement, SlotElementProps } from '@/components/misc/Slot/Element';
import { useCatalogContext } from '@/contexts/Catalog';

export type CatalogLastPageProps = SlotElementProps<'section'>;

export const CatalogLastPage = <T,>(props: CatalogLastPageProps) => {
  const { isLastPage } = useCatalogContext<T>();

  return isLastPage ? (
    <SlotElement
      tag='section'
      {...props}
    />
  ) : null;
};
