'use client';

import { useCallback, useEffect, useRef } from 'react';

const useTimeout = (fn, delay) => {
  const fnRef = useRef(fn),
    timeoutRef = useRef('');

  const set = useCallback(
      () => (timeoutRef.current = setTimeout(fnRef.current, delay)),
      [delay],
    ),
    clear = useCallback(() => clearTimeout(timeoutRef.current), []);

  useEffect(() => {
    set();

    return clear;
  }, [set, clear]);

  const reset = useCallback(() => {
    clear();
    set();
  }, [clear, set]);

  return { reset, clear };
};

export default useTimeout;
