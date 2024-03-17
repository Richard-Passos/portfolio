import { Inter } from 'next/font/google';

import { Footer, Header, Providers, SmoothScroll } from '@/components';
import { Cursor } from '@/components/ui';
import '@/styles/globals.css';
import { cn } from '@/utils';

const font = Inter({
  subsets: ['latin'],
  variable: '--font-app',
});

const metadata = {
  title: 'Richard Passos — home',
  description: 'Portfolio of Richard Passos an awesome full stack developer.',
};

const Layout = ({ children }) => {
  return (
    <html lang='en'>
      <Providers.GlobalState>
        <body
          className={cn(
            'light relative flex min-h-svh flex-col items-center overflow-x-clip bg-main font-app [--header-h:calc(theme(spacing.sm)*2+theme(spacing.10))]',
            font.variable,
          )}
        >
          <SmoothScroll>
            <Cursor>
              <Cursor.Content />
            </Cursor>

            <Header />

            {children}

            <Footer />
          </SmoothScroll>
        </body>
      </Providers.GlobalState>
    </html>
  );
};

export default Layout;
export { metadata };
