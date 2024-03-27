import { Inter } from 'next/font/google';

import { globalsApi } from '@/api';
import { Footer, Header, Providers, SmoothScroll } from '@/components';
import { Cursor, ErrorBoundary } from '@/components/ui';
import '@/styles/globals.css';
import { cn } from '@/utils';

const font = Inter({ subsets: ['latin'], variable: '--font-app' });

const Layout = ({ children }) => {
  return (
    <html    lang='en'>
      <Providers.GlobalState>
        <SmoothScroll>
          <body
            className={cn(
              'light relative flex min-h-svh flex-col items-center overflow-x-clip bg-main font-app [--header-h:calc(theme(spacing.sm)*2+theme(spacing.10))]',
              font.variable,
            )}
            id='top'
          >
            <Cursor>
              <Cursor.Content />
            </Cursor>

            <Header />

            <ErrorBoundary.Provider>
              <ErrorBoundary>{children}</ErrorBoundary>
            </ErrorBoundary.Provider>

            <Footer />
          </body>
        </SmoothScroll>
      </Providers.GlobalState>
    </html>
  );
};

const generateMetadata = async () => {
  const { data = {} } = await globalsApi.getOne('personal-info');

  return {
    title: {
      default: `${data.name?.first} ${data.name?.last}`,
      template: `%s · ${data.name?.first} ${data.name?.last}`,
    },
    description: data.summary,
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
