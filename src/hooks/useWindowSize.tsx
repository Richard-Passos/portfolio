'use client';

import { useCallback, useState } from 'react';

import useEventListener from './useEventListener';

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  const handleSetWindowSize = useCallback(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    setWindowSize((prev) =>
      prev.width === width && prev.height === height ? prev : { width, height }
    );
  }, []);

  useEventListener('resize', handleSetWindowSize);

  return windowSize;
};

export default useWindowSize;
