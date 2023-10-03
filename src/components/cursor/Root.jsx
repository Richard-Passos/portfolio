'use client';

import { useMotionValue } from 'framer-motion';
import { useSelector } from 'react-redux';

import { useSmooth } from '@/hooks';
import { cn } from '@/utils';

import FollowPointer from '../follow-pointer';

const VARIANTS_DEFAULT = {
  width: 32,
  height: 32,
  scale: 0,
  x: null,
  y: null,
};

const Cursor = ({ className, ...props }) => {
  const reduxVariant = useSelector((data) => data.cursor.variant),
    width = useSmooth(VARIANTS_DEFAULT.width),
    height = useSmooth(VARIANTS_DEFAULT.height),
    scale = useSmooth(VARIANTS_DEFAULT.scale),
    x = useMotionValue(VARIANTS_DEFAULT.x),
    y = useMotionValue(VARIANTS_DEFAULT.y);

  const variant = { width, height, scale, x, y };

  if (reduxVariant) {
    updateVariant(reduxVariant, variant);
  } else {
    resetVariant(variant);
  }

  return (
    <FollowPointer
      className={cn('-z-10 rounded-full bg-primary', className)}
      transition={{ duration: 300 }}
      variant={variant}
      {...props}
    >
      <span aria-label='Cursor' />
    </FollowPointer>
  );
};

const updateVariant = (reduxVariant, variant) => {
    Object.entries(reduxVariant).forEach(([key, value]) => {
      const prop = variant[key];

      if (prop) {
        prop.set(value);
      } else {
        variant[key] = value;
      }
    });
  },
  resetVariant = (variant) => {
    Object.keys(variant).forEach((key) => {
      variant[key].set(VARIANTS_DEFAULT[key]);
    });
  };

export default Cursor;
