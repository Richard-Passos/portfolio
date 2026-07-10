import { ComponentProps } from 'react';

import { Slot, SlotAsChildProps } from '@/components/misc/Slot';
import { CatalogProvider, CatalogProviderProps } from '@/contexts/Catalog';
import { MergeProps } from '@/types/MergeProps';

export type CatalogProps<T> = SlotAsChildProps<
  MergeProps<CatalogProviderProps<T>, SlotAsChildProps<ComponentProps<'section'>>>
>;

export const Catalog = <T,>({ asChild, items, ...props }: CatalogProps<T>) => {
  const Comp = asChild ? Slot : 'section';

  return (
    <CatalogProvider items={items}>
      <Comp {...props} />
    </CatalogProvider>
  );
};
