'use client';

import { useCallback, useEffect, useState } from 'react';

import { useEventListener } from '.';

const useChildrenCount = (
  parentRef,
  childrenRef,
  times = 2,
  justOdd = true,
) => {
  const [count, setCount] = useState(1);

  const handleSetCount = useCallback(() => {
    const { parentSize, childrenSize } = {
      parentSize: parentRef?.current.offsetWidth,
      childrenSize: childrenRef?.current.offsetWidth,
    };

    const num = Math.ceil((parentSize * times) / childrenSize);

    setCount(Math.max(justOdd && num % 2 !== 0 ? num : num - 1, 1));
  }, [parentRef, childrenRef, times, setCount, justOdd]);

  useEffect(() => {
    handleSetCount();
  }, [handleSetCount]);

  useEventListener('resize', handleSetCount);

  return count === Infinity ? 0 : count;
};

export default useChildrenCount;
