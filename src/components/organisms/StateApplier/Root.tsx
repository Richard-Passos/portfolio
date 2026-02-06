'use client';

import { ReactNode, useCallback, useLayoutEffect } from 'react';

import { useEventListener } from '@/hooks';
import { useThemeContext } from '@/hooks/contexts';

type StateApplierOrganismProps = { children?: ReactNode };

const StateApplierOrganism = ({ children }: StateApplierOrganismProps) => {
  const { theme } = useThemeContext();

  const handleSetHeight = useCallback(() => {
      document.documentElement.style = `--document-height: ${document.documentElement.offsetHeight}px`;
    }, []),
    resetHeight = useCallback(() => {
      document.documentElement.style = `--document-height: 0px`;
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

    return () => {
      resetHeight();
    };
  }, [handleSetHeight, resetHeight]);

  useEventListener('resize', handleSetHeight);

  return children;
};

export default StateApplierOrganism;
export type { StateApplierOrganismProps };
