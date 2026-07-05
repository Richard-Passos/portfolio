import { type LocalesValues } from 'intlayer';
import { IntlayerClientProvider } from 'next-intlayer';
import { IntlayerServerProvider } from 'next-intlayer/server';
import { type PropsWithChildren } from 'react';

import { Header } from '../Header';

export type AppProps = PropsWithChildren<{ locale: LocalesValues }>;

export const App = ({ locale, children }: AppProps) => {
  return (
    <IntlayerServerProvider locale={locale}>
      <IntlayerClientProvider locale={locale}>
        <Header />

        <main className='flex w-full max-w-bounds flex-col items-center overflow-y-clip rounded-b-4xl bg-body max-3xl:grow 3xl:min-h-bounds dark:bg-body-emphasis'>
          {children}
        </main>
      </IntlayerClientProvider>
    </IntlayerServerProvider>
  );
};
