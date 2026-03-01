import { type PropsWithChildren } from 'react';

import { StoreProvider, type StoreProviderProps } from './Store';
import { UiProvider, type UiProviderProps } from './Ui';

type AppProviderProps = PropsWithChildren<{
  storeProps?: Partial<StoreProviderProps>;
  uiProps?: Partial<UiProviderProps>;
}>;

const AppProvider = ({ children, storeProps, uiProps }: AppProviderProps) => {
  return (
    <StoreProvider {...storeProps}>
      <UiProvider {...uiProps}>{children}</UiProvider>
    </StoreProvider>
  );
};

export { AppProvider };
export type { AppProviderProps };
