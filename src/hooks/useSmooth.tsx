'use client';

import { useSpring } from 'motion/react';

type UseSmoothParams = Parameters<typeof useSpring>;

const useSmooth = (prop: UseSmoothParams['0'], config: UseSmoothParams['1']) =>
  useSpring(prop, { ...smoothConfig, ...config });

const smoothConfig = { damping: 10, stiffness: 150, mass: 0.3 };

export default useSmooth;
export { smoothConfig };
export type { UseSmoothParams };
