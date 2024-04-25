import { Inter } from 'next/font/google';

import { globalsApi } from '@/api';
import { Footer, Header, Providers, SmoothScroll } from '@/components';
import { AnimatePresence } from '@/components/animate';
import { Cursor, ErrorBoundary } from '@/components/ui';
import '@/styles/globals.css';
import { cn } from '@/utils';
import { locales } from '@/navigation';
import { unstable_setRequestLocale } from 'next-intl/server';

const font = Inter({ subsets: ['latin'], variable: '--font-app' });

const Layout = ({ children, params: { locale } }) => {
  unstable_setRequestLocale(locale);

  return (
    <html
      lang={locale}
      className='overflow-x-clip'
    >
      <Providers.GlobalState>
        <SmoothScroll>
          <Header.GetState>
            <body
              className={cn(
                'relative flex min-h-svh flex-col items-center overflow-x-clip bg-main font-app [&[data-scroll-locked]]:!mr-0',
                font.variable,
              )}
            >
              <Cursor>
                <Cursor.Content />
              </Cursor>

              <Header />

              <ErrorBoundary.Provider>
                <ErrorBoundary>
                  <AnimatePresence mode='await'>{children}</AnimatePresence>
                </ErrorBoundary>
              </ErrorBoundary.Provider>

              <Footer />
            </body>
          </Header.GetState>
        </SmoothScroll>
      </Providers.GlobalState>
    </html>
  );
};

const generateMetadata = async ({ params: { locale } }) => {
  const { data = {} } = (await globalsApi.getOne('personal-info', `?locale=${locale}`)).data;

  return {
    title: {
      default: `${data.name?.first} ${data.name?.last}`,
      template: `%s · ${data.name?.first} ${data.name?.last}`,
    },
    description: data.description,
    openGraph: {
      title: {
        default: `${data.name?.first} ${data.name?.last}`,
        template: `%s · ${data.name?.first} ${data.name?.last}`,
      },
      description: data.summary,
    },
  };
};

const generateStaticParams = () => locales.map((locale) => ({ locale }));

export default Layout;
export { generateMetadata, generateStaticParams };
