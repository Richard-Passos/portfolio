'use client';

import { useEffect, useRef } from 'react';

const useEventListener = (ev, fn, el, opts) => {
  fn = useRef(fn).current;

  useEffect(() => {
    const targetEl = el?.current ?? window;

    targetEl.addEventListener(ev, fn, opts);

    return () => targetEl.removeEventListener(ev, fn, opts);
  }, [el, ev, fn, opts]);
};

export default useEventListener;
