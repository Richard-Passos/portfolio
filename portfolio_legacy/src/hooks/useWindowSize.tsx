import { useCallback, useLayoutEffect, useState } from 'react';

import { useEventListener } from './useEventListener';

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  const handleSetWindowSize = useCallback(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    setWindowSize({ width, height });
  }, [setWindowSize]);

  useLayoutEffect(() => {
    handleSetWindowSize();
  }, [handleSetWindowSize]);

  useEventListener('resize', handleSetWindowSize);

  return windowSize;
};

export { useWindowSize };
