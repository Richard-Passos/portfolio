import { SlotElement, SlotElementProps } from '@/components/misc/Slot/Element';

export type CatalogListProps = SlotElementProps<'ul'>;

export const CatalogList = <T,>(props: CatalogListProps) => {
  return (
    <SlotElement
      tag='ul'
      {...props}
    />
  );
};
