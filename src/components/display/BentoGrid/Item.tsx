import { MergeProps } from '@/types/MergeProps';
import { SlotElement, SlotElementProps } from '@/components/misc/Slot/Element';

export type BentoGridItemProps = MergeProps<
  {
    index: number;
  },
  SlotElementProps<'li'>
>;

export const BentoGridItem = ({ index, style, ...props }: BentoGridItemProps) => {
  return (
    <SlotElement
      tag='li'
      style={{
        gridArea: `item-${index}`,
        ...style
      }}
      {...props}
    />
  );
};
