'use client';

import { useEffect, useRef } from 'react';

const useUpdateEffect = (effect, deps) => {
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = false;
  }, []);

  useEffect(() => {
    if (isMounted.current) return effect?.();
    else isMounted.current = true;
  }, deps);
};

export default useUpdateEffect;
