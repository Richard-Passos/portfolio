'use client';

import { motion } from 'framer-motion';

const Root = ({ variants, type, animation, as, ...props }) => {
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

  const Tag = motion[as || 'div'];

  return (
    <Tag
      {...animation}
      {...props}
    />
  );
};

export default Root;
