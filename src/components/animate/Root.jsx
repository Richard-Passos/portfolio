'use client';

import { Slot } from '@radix-ui/react-slot';
import { motion } from 'framer-motion';
import { forwardRef } from 'react';

const Animate = (
  { variants = [], type = 'animate', config, ...props },
  ref,
) => {
  const [hidden, visible, exit] = variants;

  const defaultConfig = {
    variants: {
      hidden,
      visible,
      exit,
    },
    initial: 'hidden',
    [type]: 'visible',
    exit: 'exit'
  };

  config = config || defaultConfig;

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
