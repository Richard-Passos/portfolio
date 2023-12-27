'use client';

import { useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';

const useIsInView = (ref, amount = '1.5') => {
  const [isInView, setIsInView] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['-.001 1', `${amount} 1`],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (val) =>
      _handleSetIsInView(setIsInView, val),
    );

    return () => unsubscribe();
  }, [scrollYProgress]);

  return isInView;
};

const _handleSetIsInView = (setIsInView, val) =>
  setIsInView((state) => {
    if (state && val < 0.999) {
      state = false;
    } else if (!state && val >= 0.999) {
      state = true;
    }

    return state;
  });

export default useIsInView;
