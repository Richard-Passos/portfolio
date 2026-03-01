import { useContext } from 'react';

import { CatalogContext, CatalogContextState } from '@/contexts';

const useCatalogContext = <T,>() => {
  const context = useContext<CatalogContextState<T> | undefined>(
    CatalogContext
  );

  if (context === undefined)
    throw new Error('useCatalogContext must be used within a CatalogProvider');

  return context;
};

export { useCatalogContext };
