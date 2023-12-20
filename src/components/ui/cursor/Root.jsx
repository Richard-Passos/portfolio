'use client';

import { useMotionValue } from 'framer-motion';
import { useSelector } from 'react-redux';

import { useSmooth } from '@/hooks';
import { cn } from '@/utils';

import { FollowPointer } from '../follow-pointer';

const CURSOR_ID = 'fp-cursor',
  CURSOR_VARIANTS_DEFAULT = {
    width: 91,
    height: 91,
    borderRadius: 999,
    scaleX: 0.1,
    scaleY: 0.1,
    x: null,
    y: null,
  };

const Cursor = ({ className, smoothConfig, style, children, ...props }) => {
  const { theme, ...variant } = useSelector((data) => data.cursor.variant),
    smoothVariant = {
      width: useSmooth(CURSOR_VARIANTS_DEFAULT.width),
      height: useSmooth(CURSOR_VARIANTS_DEFAULT.height),
      borderRadius: useSmooth(CURSOR_VARIANTS_DEFAULT.borderRadius),
      scaleX: useMotionValue(CURSOR_VARIANTS_DEFAULT.scaleX),
      scaleY: useMotionValue(CURSOR_VARIANTS_DEFAULT.scaleY),
      x: useMotionValue(CURSOR_VARIANTS_DEFAULT.x),
      y: useMotionValue(CURSOR_VARIANTS_DEFAULT.y),
    };

  resetVariant(smoothVariant);
  updateVariant(variant, smoothVariant);

  return (
    <FollowPointer
      aria-label='Custom cursor'
      className={cn(
        'z-[99] flex items-center justify-center bg-primary text-primary-content transition-colors',
        theme,
        className,
      )}
      id={CURSOR_ID}
      smoothConfig={{ stiffness: 125, ...smoothConfig }}
      style={{ ...smoothVariant, ...style }}
      {...props}
    >
      <div>{children}</div>
    </FollowPointer>
  );
};

const resetVariant = (smoothVariant) => {
    Object.keys(smoothVariant).forEach((key) => {
      smoothVariant[key].set(CURSOR_VARIANTS_DEFAULT[key]);
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
export { CURSOR_ID, CURSOR_VARIANTS_DEFAULT, resetVariant, updateVariant };
