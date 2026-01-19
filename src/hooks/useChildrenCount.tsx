'use client';

import { RefObject, useCallback, useLayoutEffect, useState } from 'react';

import useEventListener from './useEventListener';

const useChildrenCount = (
  parentRef: RefObject<HTMLElement | null>,
  childrenRef: RefObject<HTMLElement | null>,
  times = 2
) => {
  if (!parentRef || !childrenRef) return 0;

  const [count, setCount] = useState(1);

  const handleSetCount = useCallback(() => {
    if (!(parentRef.current && childrenRef.current)) return;

    const { parentSize, childrenSize } = {
      parentSize: parentRef.current.offsetWidth,
      childrenSize: childrenRef.current.offsetWidth
    };

    const num = Math.ceil((parentSize * times) / childrenSize);

    setCount(Math.max(num % 2 !== 0 ? num : num - 1, 1));
  }, [parentRef, childrenRef, times, setCount]);

  useLayoutEffect(() => {
    handleSetCount();
  }, [handleSetCount]);

  useEventListener('resize', handleSetCount);

  return count === Infinity ? 1 : count;
};

export default useChildrenCount;
