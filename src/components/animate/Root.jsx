'use client';

import { Slot } from '@radix-ui/react-slot';
import { motion } from 'framer-motion';
import { forwardRef } from 'react';

const Animate = ({ variants = [], type = 'animate', config, ...props }, ref) => {
  const [hidden, visible] = variants;

  const defaultConfig = {
    variants: {
      hidden,
      visible,
    },
    initial: 'hidden',
    [type]: 'visible',
  };

  config = config || defaultConfig;
  console.log('-  config   -', config)

  return (
    <MotionChild
      ref={ref}
      {...config}
      {...props}
    />
  );
};

const MotionChild = motion(Slot);

export default forwardRef(Animate);
