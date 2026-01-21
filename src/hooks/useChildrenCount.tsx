'use client';

import { RefObject, useCallback, useState } from 'react';

import useEventListener from './useEventListener';

const useChildrenCount = (
  parentRef: RefObject<HTMLElement | null>,
  childrenRef: RefObject<HTMLElement | null>,
  times = 2
) => {
  const [count, setCount] = useState(1);

  const calculate = useCallback(() => {
    if (!(parentRef.current && childrenRef.current)) return;

    const parentSize = parentRef.current.offsetWidth;
    const childrenSize = childrenRef.current.offsetWidth;

    const num = Math.ceil((parentSize * times) / childrenSize);
    const nextCount = Math.max(num % 2 !== 0 ? num : num - 1, 1);

    setCount((prev) => (prev === nextCount ? prev : nextCount));
  }, [parentRef, childrenRef, times]);

  useEventListener('resize', calculate);

  return count;
};

export default useChildrenCount;
