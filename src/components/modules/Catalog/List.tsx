'use client';

import { SlotElement, SlotElementProps } from '@/components/misc/Slot/Element';
import { useCatalogContext } from '@/contexts/Catalog';

export type CatalogListProps = SlotElementProps<'ul'>;

export const CatalogList = <T,>(props: CatalogListProps) => {
  const { isEmpty } = useCatalogContext<T>();

  return isEmpty ? null : (
    <SlotElement
      tag='ul'
      {...props}
    />
  );
};
