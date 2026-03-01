'use client';

import { Provider, ProviderProps } from 'react-redux';
import { PersistGate, PersistGateProps } from 'redux-persist/integration/react';

import { persistor, store } from '@/store';
import { MergeProps } from '@/types';

export type StoreProviderProps = MergeProps<
  {
    persistGateProps?: Partial<PersistGateProps>;
  },
  Partial<ProviderProps>
>;

export const StoreProvider = ({ children, persistGateProps, ...props }: StoreProviderProps) => {
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
