import { SlotElement, SlotElementProps } from '@/components/misc/Slot/Element';

export type CatalogEmptyProps = SlotElementProps<'section'>;

export const CatalogEmpty = (props: CatalogEmptyProps) => {
  return (
    <SlotElement
      tag='section'
      {...props}
    />
  );
};
