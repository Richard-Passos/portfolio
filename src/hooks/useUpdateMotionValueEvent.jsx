'use client';

import { useMotionValueEvent } from 'framer-motion';
import { useEffect, useRef } from 'react';

const useUpdateMotionValueEvent = (val, ev, cb, defaultVal) => {
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = false;
  }, []);

  useMotionValueEvent(val, ev, (latest) => {
    if (isMounted.current) return cb?.(latest);
    else {
      isMounted.current = true;

      return defaultVal && cb?.(defaultVal);
    }
  });
};

export default useUpdateMotionValueEvent;
