'use client';

import { useCatalogContext } from '@/contexts/Catalog';
import { SlotElement, SlotElementProps } from '@/components/misc/Slot/Element';

export type CatalogEmptyProps = SlotElementProps<'section'>;

export const CatalogEmpty = <T,>(props: CatalogEmptyProps) => {
  const { isEmpty } = useCatalogContext<T>();

  return isEmpty ? (
    <SlotElement
      tag='section'
      {...props}
    />
  ) : null;
};
