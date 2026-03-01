import { DependencyList, EffectCallback, useEffect, useRef } from 'react';

const useUpdateEffect = (effect: EffectCallback, deps: DependencyList) => {
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = false;
  }, []);

  useEffect(() => {
    if (isMounted.current) return effect();
    else isMounted.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps, effect]);
};

export { useUpdateEffect };
