'use client';

import { deviceType } from 'detect-it';
import { motion } from 'motion/react';
import { ComponentProps, RefObject, useEffect, useRef } from 'react';

import { Slot } from '@/components/misc';
import { UseSmoothParams, useEventListener, useSmooth } from '@/hooks';
import { useMagneticContext } from '@/hooks/contexts';
import { MergeProps } from '@/types';
import { setRefs } from '@/utils';

type MagneticRootProps = MergeProps<
  {
    smoothConfig?: UseSmoothParams['1'];
    limit?: { x: number; y: number };
  },
  ComponentProps<typeof MotionChild>
>;

const magneticSmoothConfig = { damping: 7, stiffness: 100, mass: 0.5 };

const MotionChild = motion.create(Slot);

const MagneticRoot = ({
  smoothConfig,
  limit = { x: 0.35, y: 0.35 },
  style,
  ref,
  ...props
}: MagneticRootProps) => {
  const innerRef = useRef<HTMLElement>(null) as RefObject<HTMLElement>,
    { container } = useMagneticContext(),
    position = {
      x: useSmooth(0, { ...magneticSmoothConfig, ...smoothConfig }),
      y: useSmooth(0, { ...magneticSmoothConfig, ...smoothConfig })
    };

  const element = useRef<HTMLElement>(null) as RefObject<HTMLElement>;

  const resetPosition = () => {
      position.x.set(0);
      position.y.set(0);
    },
    updatePosition = ({ clientX, clientY }: MouseEvent) => {
      if (!element.current) return;

      const { left, top, width, height } =
        element.current.getBoundingClientRect();

      const center = { x: left + width / 2, y: top + height / 2 };

      const pos =
        deviceType !== 'touchOnly'
          ? {
              x: (clientX - center.x) * limit.x,
              y: (clientY - center.y) * limit.y
            }
          : { x: 0, y: 0 };

      position.x.set(pos.x);
      position.y.set(pos.y);
    };

  useEffect(() => {
    element.current = container?.current ?? innerRef.current;
  }, [container]);

  useEventListener('mousemove', updatePosition, element);
  useEventListener('mouseleave', resetPosition, element);

  return (
    <MotionChild
      ref={setRefs(ref, innerRef)}
      style={{
        ...position,
        ...style
      }}
      {...props}
    />
  );
};

export { MagneticRoot, magneticSmoothConfig };
export type { MagneticRootProps };
