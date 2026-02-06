'use client';

import { Provider, ProviderProps } from 'react-redux';
import { PersistGate, PersistGateProps } from 'redux-persist/integration/react';

import store, { persistor } from '@/store';

type ProvidersStoreOrganismOwnProps = {
  persistGateProps?: Partial<PersistGateProps>;
};

type ProvidersStoreOrganismProps = ProvidersStoreOrganismOwnProps &
  Omit<Partial<ProviderProps>, keyof ProvidersStoreOrganismOwnProps>;

const ProvidersStoreOrganism = ({
  children,
  persistGateProps,
  ...props
}: ProvidersStoreOrganismProps) => {
  return (
    <Provider
      store={store}
      {...props}
    >
      <PersistGate
        loading={null}
        persistor={persistor}
        {...persistGateProps}
      >
        {children}
      </PersistGate>
    </Provider>
  );
};

export default ProvidersStoreOrganism;
export type { ProvidersStoreOrganismProps };
