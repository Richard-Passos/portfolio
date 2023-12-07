'use client';

import { deviceType } from 'detect-it';
import { useMotionValue } from 'framer-motion';
import { useEffect } from 'react';

const useFollowPointer = ({ current }) => {
  const x = useMotionValue(0),
    y = useMotionValue(0);

  useEffect(() => {
    if (current && deviceType !== 'touchOnly') {
      const onPointerMove = ({ clientX, clientY }) => {
        const { offsetLeft, offsetTop, offsetWidth, offsetHeight } = current;

        const center = {
          x: offsetLeft + offsetWidth / 2,
          y: offsetTop + offsetHeight / 2,
        };

        x.set(clientX - center.x);
        y.set(clientY - center.y);
      };

      window.addEventListener('pointermove', onPointerMove);

      return () => window.removeEventListener('pointermove', onPointerMove);
    }
  }, [current, x, y]);

  return { x, y };
};

export default useFollowPointer;
