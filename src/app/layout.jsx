import { Inter } from 'next/font/google';

import { Footer, Header, Menu, Providers, SmoothScroll } from '@/components';
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
    <html
      className='scroll-smooth'
      lang='en'
      suppressHydrationWarning
    >
      <Providers.GlobalState>
        <body
          className={cn(
            'relative min-h-screen overflow-x-clip bg-main font-app text-content transition-bg',
            font.variable,
          )}
        >
          <Providers.Theme>
            <Cursor>
              <Cursor.Content />
            </Cursor>

            <SmoothScroll>
              <Header />

              <Menu />

              {children}

              <Footer />
            </SmoothScroll>
          </Providers.Theme>
        </body>
      </Providers.GlobalState>
    </html>
  );
};

export default Layout;
export { metadata };
