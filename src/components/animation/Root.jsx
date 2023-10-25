'use client';

import { Slot } from '@radix-ui/react-slot';
import { motion } from 'framer-motion';

const Animation = ({ variants, type, animation, ...props }) => {
  const [hidden, visible] = variants || [];

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
      {...animation}
      {...props}
    />
  );
};

const MotionChild = motion(Slot)

export default Animation;
