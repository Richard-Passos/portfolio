'use client';

import { useSpring } from 'framer-motion';

const useSmooth = (prop, options) => {
  return useSpring(prop, { ...smoothOptions, ...options });
};

const smoothOptions = { damping: 10, stiffness: 150, mass: 0.3 };

export default useSmooth;
