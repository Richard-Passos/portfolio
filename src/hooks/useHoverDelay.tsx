import { RefObject, useCallback, useState } from 'react';

import { useDebounceCallback } from './useDebounceCallback';
import { useEventListener } from './useEventListener';

const useHoverDelay = (ref: RefObject<HTMLElement | null>, delay: number) => {
  const [isHover, setIsHover] = useState(false),
    debounced = useDebounceCallback(setIsHover, delay);

  const handleMouseEnter = useCallback(() => {
      debounced.cancel();
      setIsHover(true);
    }, [debounced]),
    handleMouseLeave = useCallback(() => {
      debounced(false);
    }, [debounced]);

  useEventListener('mouseenter', handleMouseEnter, ref);
  useEventListener('mouseleave', handleMouseLeave, ref);

  return isHover;
};

export { useHoverDelay };
