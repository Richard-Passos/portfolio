import { Box, BoxProps, createPolymorphicComponent } from '@mantine/core';
import { ComponentProps } from 'react';

type BoxAtomOwnProps = ComponentProps<'div'>;

type BoxAtomProps = BoxAtomOwnProps & Omit<BoxProps, keyof BoxAtomOwnProps>;

const BoxAtom = (props: BoxAtomProps) => {
  return <Box {...props} />;
};

export default createPolymorphicComponent<'div', BoxAtomProps>(BoxAtom);
export type { BoxAtomProps };
