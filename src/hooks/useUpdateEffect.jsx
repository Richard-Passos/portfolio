'use client';

const { useEffect, useRef } = require('react');

const useUpdateEffect = (effect, deps) => {
  const isFirstMount = useRef(true);

  useEffect(() => {
    if (!isFirstMount.current) return effect();
    else isFirstMount.current = false;
  }, [effect, ...deps]);
};

export default useUpdateEffect;
