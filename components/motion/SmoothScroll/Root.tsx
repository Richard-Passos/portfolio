'use client';

import { ReactLenis } from '@studio-freight/react-lenis';
import { ComponentProps } from 'react';

type SmoothScrollProps = ComponentProps<typeof ReactLenis>;

const SmoothScroll = (props: SmoothScrollProps) => {
  return (
    <ReactLenis
      root
      {...props}
    />
  );
};

export { SmoothScroll };
export type { SmoothScrollProps };
