'use client';

import { Slot } from '@radix-ui/react-slot';
import { motion } from 'framer-motion';
import { forwardRef } from 'react';

const Animation = ({ variants = [], type, animation, ...props }, ref) => {
  const [hidden, visible] = variants;

  const defaultAnimation = {
    variants: {
      hidden,
      visible,
    },
    initial: 'hidden',
    [type]: 'visible',
  };

  animation = animation || defaultAnimation;

  return (
    <MotionChild
      ref={ref}
      {...animation}
      {...props}
    />
  );
};

const MotionChild = motion(Slot);

export default forwardRef(Animation);
