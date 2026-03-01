'use client';

import { useMotionValueEvent, useScroll } from 'motion/react';
import { RefObject, useLayoutEffect } from 'react';

import { useThemeContext } from '@/hooks/contexts';
import { Theme } from '@/types';

const useSetTheme = (
  ref: RefObject<HTMLElement>,
  theme: Theme,
  force?: boolean
) => {
  const { setTheme } = useThemeContext();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 0.1', '1 0.11']
  });

  useMotionValueEvent(scrollYProgress, 'change', (value) => {
    if ((value > 0 && value < 0.4) || (value < 1 && value > 0.6))
      setTheme(theme);
  });

  useLayoutEffect(() => {
    if (force) setTheme(theme);
  }, [force, setTheme, theme]);
};

export { useSetTheme };
