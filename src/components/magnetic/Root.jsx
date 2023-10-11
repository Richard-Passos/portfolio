'use client';

import { Slot } from '@radix-ui/react-slot';
import { motion } from 'framer-motion';
import { forwardRef, useRef } from 'react';

import { useSmooth } from '@/hooks';
import { isFunctionThanCall, transformTemplate } from '@/utils';

const MotionChild = motion(Slot);

const Magnetic = (props, ref) => {
  const innerRef = useRef(null),
    position = {
      x: useSmooth(0, { damping: 7 }),
      y: useSmooth(0, { damping: 7 }),
    };

  const resetPosition = () => {
      position.x.set(0);
      position.y.set(0);
    },
    updatePosition = (ev) => {
      const LIMIT = 0.5;

      const { clientX, clientY } = ev,
        { left, top, width, height } = innerRef.current.getBoundingClientRect();

      const center = { x: left + width / 2, y: top + height / 2 };

      position.x.set((clientX - center.x) * LIMIT);
      position.y.set((clientY - center.y) * LIMIT);
    };

  const setRefs = (el) => {
      isFunctionThanCall(ref, el);

      innerRef.current = el;
    },
    onMouseLeave = (ev) => {
      isFunctionThanCall(props.onMouseLeave, ev);

      resetPosition();
    },
    onMouseMove = (ev) => {
      isFunctionThanCall(props.onMouseMove, ev);

      updatePosition(ev);
    };

  return (
    <MotionChild
      ref={setRefs}
      style={{
        x: position.x,
        y: position.y,
      }}
      transformTemplate={transformTemplate}
      {...props}
      onMouseLeave={onMouseLeave}
      onMouseMove={onMouseMove}
    />
  );
};

export default forwardRef(Magnetic);
