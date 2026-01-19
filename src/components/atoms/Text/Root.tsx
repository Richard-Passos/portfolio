import { Text, TextProps } from '@mantine/core';
import { ComponentProps } from 'react';

type TextAtomOwnProps = TextProps;

type TextAtomProps = TextAtomOwnProps &
  Omit<ComponentProps<'p'>, keyof TextAtomOwnProps>;

const TextAtom = Text;

export default TextAtom;
export type { TextAtomProps };
