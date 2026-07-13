import { SlotElement, SlotElementProps } from '@/components/misc/Slot/Element';
import { CatalogProvider, CatalogProviderProps } from '@/contexts/Catalog';
import { MergeProps } from '@/types/MergeProps';

export type CatalogProps<T> = MergeProps<CatalogProviderProps<T>, SlotElementProps<'section'>>;

export const Catalog = <T,>({ items, ...props }: CatalogProps<T>) => {
  return (
    <CatalogProvider items={items}>
      <SlotElement
        tag='section'
        {...props}
      />
    </CatalogProvider>
  );
};
