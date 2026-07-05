import { ComponentProps } from 'react';

import { Slot, SlotAsChildProps } from '@/components/misc/Slot';
import { CatalogProvider, CatalogProviderProps } from '@/providers';
import { MergeProps } from '@/types';

type CatalogRootProps<T> = MergeProps<
  CatalogProviderProps<T>,
  SlotAsChildProps<ComponentProps<'section'>>
>;

const CatalogRoot = <T,>({ asChild, items, ...props }: CatalogRootProps<T>) => {
  const Comp = asChild ? Slot : 'section';

  return (
    <CatalogProvider items={items}>
      <Comp {...props} />;
    </CatalogProvider>
  );
};

export { CatalogRoot };
export type { CatalogRootProps };
