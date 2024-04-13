'use client'

const { useEffect, useRef } = require('react');

const useUpdateEffect = (effect, deps) => {
  const isFirstMount = useRef(true);

  useEffect(() => {
    if (!isFirstMount.current) effect();
    else isFirstMount.current = false;
  }, deps);
};

export default useUpdateEffect