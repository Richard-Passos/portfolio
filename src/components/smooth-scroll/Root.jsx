'use client';

import { ReactLenis } from '@studio-freight/react-lenis';

const SmoothScroll = (props) => {
  return (
    <ReactLenis
      options={{ smoothTouch: true, touchMultiplier: 2 }}
      root
      {...props}
    />
  );
};

export default SmoothScroll;
