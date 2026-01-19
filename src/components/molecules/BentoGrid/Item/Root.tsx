import { createPolymorphicComponent } from '@mantine/core';

import { Box } from '@/components/atoms';
import { BoxProps } from '@/components/atoms/Box';
import { PolymorphicRef } from '@/types';

type BentoGridItemMoleculeOwnProps = {
  index: number;
  ref?: PolymorphicRef<'li'> & BoxProps['ref'];
};

type BentoGridItemMoleculeProps = BentoGridItemMoleculeOwnProps &
  Omit<BoxProps, keyof BentoGridItemMoleculeOwnProps>;

const BentoGridItemMolecule = ({
  index,
  style,
  ...props
}: BentoGridItemMoleculeProps) => {
  return (
    <Box
      component='li'
      style={{
        gridArea: `item-${index}`,
        ...style
      }}
      {...props}
    />
  );
};

export default createPolymorphicComponent<'li', BentoGridItemMoleculeProps>(
  BentoGridItemMolecule
);
export type { BentoGridItemMoleculeProps };
