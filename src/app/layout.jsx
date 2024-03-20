import { Inter } from 'next/font/google';

import { Footer, Header, SmoothScroll, Providers } from '@/components';
import { Cursor, ErrorBoundary } from '@/components/ui';
import '@/styles/globals.css';
import { cn } from '@/utils';
import { globalsApi } from '@/api';

const font = Inter({ subsets: ['latin'], variable: '--font-app' });

const Layout = ({ children }) => {
  return (
    <html
      className='scroll-smooth'
      lang='pt-BR'
    >
            <Providers.GlobalState>

      <body
        className={cn(
          'light relative flex min-h-svh flex-col items-center overflow-x-clip bg-main font-app [--header-h:calc(theme(spacing.sm)*2+theme(spacing.10))]',
          font.variable,
        )}
        id='top'
      >
         <SmoothScroll>

            <Cursor>
              <Cursor.Content />
            </Cursor>

        <Header />

        <ErrorBoundary.Provider>
          <ErrorBoundary>{children}</ErrorBoundary>
        </ErrorBoundary.Provider>

        <Footer />
        </SmoothScroll> 
      </body>
          </Providers.GlobalState>
    </html>
  );
};

const generateMetadata = async () => {
  const data = (await globalsApi.getOne('personal-info')) || {};

  return {
    title: {
      default: `${data.name?.first} ${data.name?.last}`,
      template: `%s · ${data.name?.first} ${data.name?.last}`,
    },
    icons: data.logo?.data.src,
    description: data.summary,
    openGraph: {
      title: {
        default: `${data.name?.first} ${data.name?.last}`,
        template: `%s · ${data.name?.first} ${data.name?.last}`,
      },
      description: data.summary,
      images: [data.logo?.data],
    },
  };
};

export default Layout;
export { generateMetadata };

