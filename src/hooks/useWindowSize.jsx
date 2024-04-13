'use client';

import { useCallback, useEffect, useState } from 'react';

import useEventListener from './useEventListener';

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  const handleSetWindowSize = useCallback(
    () =>
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      }),
    [setWindowSize],
  );

  useEventListener('resize', handleSetWindowSize);

  useEffect(() => {
    handleSetWindowSize();
  }, [handleSetWindowSize]);

  return windowSize;
};

export default useWindowSize;
