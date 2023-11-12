'use client';

import { useMotionValue } from 'framer-motion';
import { useSelector } from 'react-redux';

import { useSmooth } from '@/hooks';
import { cn } from '@/utils';

import { FollowPointer } from '../follow-pointer';

const VARIANTS_DEFAULT = {
  width: 91,
  height: 91,
  borderRadius: 999,
  scaleX: 0.1,
  scaleY: 0.1,
  x: null,
  y: null,
};

const Cursor = ({ className, style, children, ...props }) => {
  const { theme, ...variant } = useSelector((data) => data.cursor.variant),
    smoothVariant = {
      width: useSmooth(VARIANTS_DEFAULT.width),
      height: useSmooth(VARIANTS_DEFAULT.height),
      borderRadius: useSmooth(VARIANTS_DEFAULT.borderRadius),
      scaleX: useMotionValue(VARIANTS_DEFAULT.scaleX),
      scaleY: useMotionValue(VARIANTS_DEFAULT.scaleY),
      x: useMotionValue(VARIANTS_DEFAULT.x),
      y: useMotionValue(VARIANTS_DEFAULT.y),
    };

  resetVariant(smoothVariant);
  updateVariant(variant, smoothVariant);

  return (
    <FollowPointer
      className={cn(
        'flex items-center justify-center bg-primary text-primary-content transition-colors',
        theme,
        className,
      )}
      id='follow-pointer-cursor'
      style={{ ...smoothVariant, ...style }}
      {...props}
    >
      <div aria-label='Custom cursor'>{children}</div>
    </FollowPointer>
  );
};

const resetVariant = (smoothVariant) => {
    Object.keys(smoothVariant).forEach((key) => {
      smoothVariant[key].set(VARIANTS_DEFAULT[key]);
    });
  },
  updateVariant = (variant, smoothVariant) => {
    Object.entries(variant).forEach(([key, value]) => {
      const prop = smoothVariant[key];

      if (prop) {
        prop.set(value);
      } else {
        smoothVariant[key] = value;
      }
    });
  };

export default Cursor;
