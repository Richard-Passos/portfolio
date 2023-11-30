'use client';

import Lenis from '@studio-freight/lenis';
import { useEffect } from 'react';

const SmoothScroll = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time) => {
      lenis.raf(time);

      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return <>{children}</>;
};

const scrollSmoothConfig = {};

export default SmoothScroll;
export { scrollSmoothConfig };
