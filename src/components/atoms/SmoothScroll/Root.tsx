'use client';

import { ReactLenis } from '@studio-freight/react-lenis';
import { ComponentProps } from 'react';

type SmoothScrollAtomOwnProps = {};

type SmoothScrollAtomProps = SmoothScrollAtomOwnProps &
  Omit<ComponentProps<typeof ReactLenis>, keyof SmoothScrollAtomOwnProps>;

const SmoothScrollAtom = (props: SmoothScrollAtomProps) => {
  return (
    <ReactLenis
      root
      {...props}
    />
  );
};

export default SmoothScrollAtom;
export type { SmoothScrollAtomProps };
