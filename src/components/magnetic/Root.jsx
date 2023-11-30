'use client';

import { Slot } from '@radix-ui/react-slot';
import { deviceType } from 'detect-it';
import { motion } from 'framer-motion';
import { forwardRef, useRef } from 'react';

import { useSmooth } from '@/hooks';
import { isFunctionThanCall, setRefs, transformTemplate } from '@/utils';

const Magnetic = ({ smoothConfig, limit = 0.5, style, ...props }, ref) => {
  const innerRef = useRef(null),
    position = {
      x: useSmooth(0, { ...magneticSmoothConfig, ...smoothConfig }),
      y: useSmooth(0, { ...magneticSmoothConfig, ...smoothConfig }),
    };

  const resetPosition = () => {
      position.x.set(0);
      position.y.set(0);
    },
    updatePosition = ({ clientX, clientY }) => {
      const { left, top, width, height } =
        innerRef.current.getBoundingClientRect();

      const center = { x: left + width / 2, y: top + height / 2 };

      position.x.set((clientX - center.x) * limit);
      position.y.set((clientY - center.y) * limit);
    };

  const onMouseLeave = (ev) => {
      resetPosition();

      isFunctionThanCall(props.onMouseLeave, ev);
    },
    onMouseMove = (ev) => {
      deviceType !== 'touchOnly' && updatePosition(ev);

      isFunctionThanCall(props.onMouseMove, ev);
    };

  return (
    <MotionChild
      ref={setRefs(ref, innerRef)}
      style={{
        ...style,
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

const magneticSmoothConfig = { damping: 7, stiffness: 100, mass: 0.5 };

const MotionChild = motion(Slot);

export default forwardRef(Magnetic);
export { magneticSmoothConfig };
