'use client';

import { ReactNode, useCallback, useLayoutEffect } from 'react';

import { useEventListener } from '@/hooks';
import { useThemeContext } from '@/hooks/contexts';

type StateProviderProps = { children: ReactNode };

const StateProvider = ({ children }: StateProviderProps) => {
  const { theme } = useThemeContext();

  const handleSetHeight = useCallback(() => {
    document.documentElement.style = `--document-height: ${document.documentElement.offsetHeight}px`;
  }, []);

  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-mantine-color-scheme', theme);

    return () => {
      document.documentElement.setAttribute(
        'data-mantine-color-scheme',
        'auto'
      );
    };
  }, [theme]);

  useLayoutEffect(() => {
    handleSetHeight();
  }, [handleSetHeight]);

  useEventListener('resize', handleSetHeight);

  return children;
};

export { StateProvider };
export type { StateProviderProps };
