'use client';

import { useMotionValue } from 'framer-motion';
import { useSelector } from 'react-redux';

import { useSmooth } from '@/hooks';
import { cn } from '@/utils';

import FollowPointer from '../follow-pointer';

const VARIANTS_DEFAULT = {
  width: 9.6,
  height: 9.6,
  borderRadius: 999,
  scaleX: 1,
  scaleY: 1,
  x: null,
  y: null,
  zIndex: 99,
};

const Cursor = ({ className, children, style, ...props }) => {
  const { variant } = useSelector((data) => data.cursor),
    smoothVariant = {
      width: useSmooth(VARIANTS_DEFAULT.width),
      height: useSmooth(VARIANTS_DEFAULT.height),
      borderRadius: useSmooth(VARIANTS_DEFAULT.borderRadius),
      scaleX: useMotionValue(VARIANTS_DEFAULT.scaleX),
      scaleY: useMotionValue(VARIANTS_DEFAULT.scaleY),
      x: useMotionValue(VARIANTS_DEFAULT.x),
      y: useMotionValue(VARIANTS_DEFAULT.y),
      zIndex: useMotionValue(VARIANTS_DEFAULT.zIndex),
    };

  resetVariant(smoothVariant);
  updateVariant(variant, smoothVariant);

  return (
    <FollowPointer
      className={cn('bg-primary', className)}
      id='follow-pointer-cursor'
      style={{ ...smoothVariant, ...style }}
      {...props}
    >
      <span aria-label='Custom cursor'>{children}</span>
    </FollowPointer>
  );
};

const updateVariant = (variant, smoothVariant) => {
    Object.entries(variant).forEach(([key, value]) => {
      const prop = smoothVariant[key];

      if (prop) {
        prop.set(value);
      } else {
        smoothVariant[key] = value;
      }
    });
  },
  resetVariant = (smoothVariant) => {
    Object.keys(smoothVariant).forEach((key) => {
      smoothVariant[key].set(VARIANTS_DEFAULT[key]);
    });
  };

export default Cursor;
