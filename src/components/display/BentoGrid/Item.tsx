import { MergeProps } from '@/types/MergeProps';
import { SlotElement, SlotElementProps } from '@/components/misc/Slot/Element';

export type BentoGridItemProps = MergeProps<
  {
    value: string | number;
  },
  SlotElementProps<'li'>
>;

export const BentoGridItem = ({ value, style, ...props }: BentoGridItemProps) => {
  return (
    <SlotElement
      tag='li'
      style={{
        gridArea: value,
        ...style
      }}
      {...props}
    />
  );
};
