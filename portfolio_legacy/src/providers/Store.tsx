'use client';

import { Provider, ProviderProps } from 'react-redux';
import { PersistGate, PersistGateProps } from 'redux-persist/integration/react';

import store, { persistor } from '@/store';
import { MergeProps } from '@/types';

type StoreProviderProps = MergeProps<
  {
    persistGateProps?: Partial<PersistGateProps>;
  },
  Partial<ProviderProps>
>;

const StoreProvider = ({
  children,
  persistGateProps,
  ...props
}: StoreProviderProps) => {
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

export { StoreProvider };
export type { StoreProviderProps };
