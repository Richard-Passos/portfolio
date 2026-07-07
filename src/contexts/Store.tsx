'use client';

import { Provider, type ProviderProps } from 'react-redux';
import { PersistGate, type PersistGateProps } from 'redux-persist/integration/react';

import { persistor, store } from '@/store';
import type { MergeProps } from '@/types/MergeProps';

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
