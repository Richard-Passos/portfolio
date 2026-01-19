'use client';

import { Slot } from '@radix-ui/react-slot';
import { deviceType } from 'detect-it';
import { motion } from 'motion/react';
import { ComponentProps, RefObject, useEffect, useRef } from 'react';

import { useEventListener, useSmooth } from '@/hooks';
import { useMagneticContext } from '@/hooks/contexts';
import { UseSmoothParams } from '@/hooks/useSmooth';
import { setRefs } from '@/utils';

const magneticAtomSmoothConfig = { damping: 7, stiffness: 100, mass: 0.5 };

type MagneticAtomOwnProps = {
  smoothConfig?: UseSmoothParams['1'];
  limit?: { x: number; y: number };
};

type MagneticAtomProps = MagneticAtomOwnProps &
  Omit<ComponentProps<typeof MotionChild>, keyof MagneticAtomOwnProps>;

const MagneticAtom = ({
  smoothConfig,
  limit = { x: 0.35, y: 0.35 },
  style,
  ref,
  ...props
}: MagneticAtomProps) => {
  const innerRef = useRef<HTMLElement>(null) as RefObject<HTMLElement>,
    { container } = useMagneticContext(),
    position = {
      x: useSmooth(0, { ...magneticAtomSmoothConfig, ...smoothConfig }),
      y: useSmooth(0, { ...magneticAtomSmoothConfig, ...smoothConfig })
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

const MotionChild = motion.create(Slot);

export default MagneticAtom;
export { magneticAtomSmoothConfig };
export type { MagneticAtomProps };
