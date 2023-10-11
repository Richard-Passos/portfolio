import { Inter } from 'next/font/google';

import { Cursor, Provider, ThemeProvider } from '@/components';
import { Header } from '@/patterns';
import '@/styles/globals.css';
import { cn } from '@/utils';

const font = Inter({ subsets: ['latin'], variable: '--font-app' });

const metadata = {
  title: 'Richard Passos — portfolio — home',
  description: 'My portfolio.',
};

const Layout = ({ children }) => {
  return (
    <html
      lang='en'
      suppressHydrationWarning
    >
      <Provider>
        <Cursor.Area>
          <body
            className={cn(
              'font-app relative mx-auto min-h-screen max-w-bounds overflow-x-clip',
              font.variable,
            )}
          >
            <ThemeProvider>
              <Cursor />

              <Header />

              {children}
            </ThemeProvider>
          </body>
        </Cursor.Area>
      </Provider>
    </html>
  );
};

export default Layout;
export { metadata };
