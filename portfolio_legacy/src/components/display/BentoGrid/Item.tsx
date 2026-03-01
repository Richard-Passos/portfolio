import { ComponentProps } from 'react';

import { Slot, SlotAsChildProps } from '@/components/misc';
import { MergeProps } from '@/types';

type BentoGridItemProps = MergeProps<
  {
    index: number;
  },
  SlotAsChildProps<ComponentProps<'li'>>
>;

const BentoGridItem = ({
  asChild,
  index,
  style,
  ...props
}: BentoGridItemProps) => {
  const Comp = asChild ? Slot : 'li';

  return (
    <Comp
      style={{
        gridArea: `item-${index}`,
        ...style
      }}
      {...props}
    />
  );
};

export { BentoGridItem };
export type { BentoGridItemProps };
