import { SpringOptions, useSpring } from 'motion/react';

export type SmoothConfig = SpringOptions;

export const smoothConfig = { damping: 10, stiffness: 150, mass: 0.3 };

export const useSmooth = (prop: number, config: SmoothConfig) =>
  useSpring(prop, { ...smoothConfig, ...config });
