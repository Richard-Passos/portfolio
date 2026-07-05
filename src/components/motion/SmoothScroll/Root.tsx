'use client';

import { ReactLenis } from '@studio-freight/react-lenis';
import { ComponentProps } from 'react';

type SmoothScrollRootProps = ComponentProps<typeof ReactLenis>;

const SmoothScrollRoot = (props: SmoothScrollRootProps) => {
  return (
    <ReactLenis
      root
      {...props}
    />
  );
};

export { SmoothScrollRoot };
export type { SmoothScrollRootProps };
