import { getHTMLTextDir } from 'intlayer';
import { IntlayerClientProvider, type NextLayoutIntlayer } from 'next-intlayer';

import { Header } from '@/components/layout/regions';
import { StoreProvider } from '@/contexts';
import '@/styles/globals.css';

export { generateStaticParams } from 'next-intlayer';

const LocaleLayout: NextLayoutIntlayer = async ({ params, children }) => {
  const { locale } = await params;

  return (
    <html
      className='overflow-x-clip has-[body[data-scroll-locked]]:overflow-y-hidden'
      lang={locale}
      dir={getHTMLTextDir(locale)}
    >
      <body className='relative flex min-h-svh flex-col items-center overflow-x-clip bg-body'>
        <StoreProvider>
          <IntlayerClientProvider locale={locale}>
            <Header />

            {children}
          </IntlayerClientProvider>
        </StoreProvider>
      </body>
    </html>
  );
};

export default LocaleLayout;
