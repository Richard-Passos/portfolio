'use client';

import { useSpring } from 'framer-motion';

const useSmooth = (prop, config) => {
  return useSpring(prop, { ...smoothConfig, ...config });
};

const smoothConfig = { damping: 10, stiffness: 150, mass: 0.3 };

export default useSmooth;
export { smoothConfig };
