'use client';

import { PropsWithChildren } from 'react';
import { HTMLProvider } from 'react-intlayer';

import { StoreProvider } from './Store';

export type AppProviderProps = PropsWithChildren;

export const AppProvider = ({ children }: PropsWithChildren) => {
  return (
    <HTMLProvider
      components={{
        right: (props) => (
          <span
            className='block w-full sm:text-right'
            {...props}
          />
        )
      }}
    >
      <StoreProvider>{children}</StoreProvider>
    </HTMLProvider>
  );
};
