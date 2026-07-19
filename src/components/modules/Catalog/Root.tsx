import { SlotElement, SlotElementProps } from '@/components/misc/Slot/Element';
import { CatalogProvider, CatalogProviderProps } from '@/contexts/Catalog';
import { MergeProps } from '@/types/MergeProps';
import { cn } from '@/utils/cn';

export type CatalogProps<T> = MergeProps<CatalogProviderProps<T>, SlotElementProps<'section'>>;

export const Catalog = <T,>({ items, className, ...props }: CatalogProps<T>) => {
  return (
    <CatalogProvider items={items}>
      <SlotElement
        tag='section'
        className={cn('flex flex-col items-center justify-center', className)}
        {...props}
      />
    </CatalogProvider>
  );
};
