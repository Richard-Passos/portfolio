import { Inter } from 'next/font/google';

import { globalsApi } from '@/api';
import { Footer, Header, Providers, SmoothScroll } from '@/components';
import { AnimatePresence } from '@/components/animate';
import { Cursor, ErrorBoundary } from '@/components/ui';
import '@/styles/globals.css';
import { cn } from '@/utils';
import lang from './lang';

const font = Inter({ subsets: ['latin'], variable: '--font-app' });

const Layout = ({ children }) => {
  return (
    <html
      lang='en'
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
              id='top'
            >
              <Cursor>
                <Cursor.Content />
              </Cursor>

              <Header lang={lang} />

              <ErrorBoundary.Provider lang={lang}>
                <ErrorBoundary>
                  <AnimatePresence mode='await'>{children}</AnimatePresence>
                </ErrorBoundary>
              </ErrorBoundary.Provider>

              <Footer lang={lang} />
            </body>
          </Header.GetState>
        </SmoothScroll>
      </Providers.GlobalState>
    </html>
  );
};

const generateMetadata = async () => {
  const { data = {} } = (await globalsApi.getOne('personal-info', `?lang=${lang}`)).data;

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

export default Layout;
export { generateMetadata };
