'use client';

import { Slot } from '@radix-ui/react-slot';
import { motion } from 'framer-motion';
import { forwardRef, useRef } from 'react';

import { cn, setRefs, transformTemplate } from '@/utils';

import Portal from '../portal';
import useSmoothPosition from './useSmoothPosition';
import useSmoothScale from './useSmoothScale';

const FollowPointer = (
  { style = {}, smoothConfig, className, id, ...props },
  ref,
) => {
  const innerRef = useRef(null);

  const { x, y } = useSmoothPosition(
      innerRef,
      { x: style.x, y: style.y },
      smoothConfig,
    ),
    scale = useSmoothScale(id, style.scale, smoothConfig),
    scaleX = useSmoothScale(id, style.scaleX, smoothConfig),
    scaleY = useSmoothScale(id, style.scaleY, smoothConfig);

  return (
    <Portal
      asChild
      ref={setRefs(ref, innerRef)}
    >
      <MotionChild
        className={cn('pointer-events-none fixed left-0 top-0 z-50', className)}
        style={{
          ...style,
          x,
          y,
          ...(style.scale ? { scale } : { scaleX, scaleY }),
        }}
        transformTemplate={transformTemplate}
        {...props}
      />
    </Portal>
  );
};

const MotionChild = motion(Slot);

export default forwardRef(FollowPointer);
