import { Box, BoxProps, DefaultMantineColor, StyleProp } from '@mantine/core';
import { PropsWithChildren } from 'react';

import { PolymorphicRef } from '@/types';
import { cn } from '@/utils';

type BgAtomOwnProps = PropsWithChildren<{
  color?: StyleProp<DefaultMantineColor>;
  ref?: PolymorphicRef<'div'>;
}>;

type BgAtomProps = BgAtomOwnProps & Omit<BoxProps, keyof BgAtomOwnProps>;

const BgAtom = ({ className, color, ...props }: BgAtomProps) => {
  return (
    <Box
      bg={color}
      className={cn(
        'bg-body pointer-events-none absolute inset-y-0 -z-50 w-screen overflow-hidden',
        className
      )}
      {...props}
    />
  );
};

export default BgAtom;

export type { BgAtomProps };
