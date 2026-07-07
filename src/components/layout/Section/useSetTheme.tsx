'use client';

import { RefObject, useCallback, useEffect } from 'react';

import { useGSAP, ScrollTrigger } from '@/hooks/useGSAP';
import { Theme } from '@/types/Theme';
import { useThemeContext } from '@/contexts/Theme';

export const useSetTheme = (ref: RefObject<HTMLElement>, theme: Theme, force?: boolean) => {
  const { setTheme } = useThemeContext();

  const applyTheme = useCallback(() => {
    setTheme(theme);
  }, [theme])

  useGSAP(() => {
      const el = ref.current;
      if (!el) return;

      const trigger = ScrollTrigger.create({
        trigger: el,
        start: 'top 10%',
        end: 'bottom 10%',
        onEnter: applyTheme,
        onEnterBack: applyTheme,
      });

      return () => {
        trigger.kill();
      };
    }, 
    {
      scope: ref,
      dependencies: [theme],
    },
  );

  useEffect(() => {
      if(force) {
        applyTheme();
      }
    }, 
    [force]
  );
};