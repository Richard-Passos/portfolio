'use client';

import { useMotionValue } from 'framer-motion';
import { useEffect } from 'react';

const useFollowPointer = (ref) => {
  const x = useMotionValue(0),
    y = useMotionValue(0);

  useEffect(() => {
    if (ref.current) {
      const onPointerMove = ({ clientX, clientY }) => {
        const { offsetLeft, offsetTop, offsetWidth, offsetHeight } =
          ref.current;

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
  }, [ref, x, y]);

  return { x, y };
};

export default useFollowPointer;
